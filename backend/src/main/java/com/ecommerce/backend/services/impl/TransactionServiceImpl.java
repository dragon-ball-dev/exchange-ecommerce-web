package com.ecommerce.backend.services.impl;

import com.ecommerce.backend.domain.dto.CategoryDTO;
import com.ecommerce.backend.domain.dto.TransactionDTO;
import com.ecommerce.backend.domain.enums.TransactionStatusName;
import com.ecommerce.backend.domain.enums.TransactionTypeName;
import com.ecommerce.backend.domain.models.*;
import com.ecommerce.backend.domain.payload.request.ScheduleExchangeRequest;
import com.ecommerce.backend.domain.payload.request.UpdateTransactionStatusRequest;
import com.ecommerce.backend.mapper.CommonMapper;
import com.ecommerce.backend.repository.*;
import com.ecommerce.backend.services.BaseService;
import com.ecommerce.backend.services.TransactionService;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl extends BaseService implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private TransactionTypeRepository transactionTypeRepository;

    @Autowired
    private TransactionStatusRepository transactionStatusRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    private final CommonMapper mapper;

    @Override
    public void createNewTransaction(TransactionDTO transactionDTO) {
        Transaction transaction = new Transaction();

        Post post1 = postRepository.findById(transactionDTO.getPost1Id())
                .orElseThrow(() -> new IllegalArgumentException("Item 1 is not exist!"));
        if (post1.isComplete()) {
            throw new IllegalArgumentException("Item 1 is completed!");
        }
        transaction.setPost1(post1);

//        TransactionType transactionType = transactionRepository.getTransactionTypeByID(transactionDTO.getTransactionTypeId())
//                .orElseThrow(() -> new IllegalArgumentException("Type is not exist!"));
//        transaction.setTransactionType(transactionType);

        TransactionType transactionType = transactionTypeRepository.findById(transactionDTO.getTransactionTypeId())
                .orElseThrow(() -> new IllegalArgumentException("Type is not exist!"));
        transaction.setTransactionType(transactionType);

        TransactionStatus transactionStatus = new TransactionStatus(1L,TransactionStatusName.NEGOTIATING);
        transaction.setTransactionStatus(transactionStatus);

        if(transactionType.getName() == TransactionTypeName.EXCHANGE){
            transaction.setPrice(0L);
            Post post2 = postRepository.findById(transactionDTO.getPost2Id())
                    .orElseThrow(() -> new IllegalArgumentException("Item 2 is not exist!"));
            transaction.setPost2(post2);
        } else {
            transaction.setPost2(null);
            transaction.setUser2(userRepository.findById(transactionDTO.getUser2Id()).get());
            transaction.setPrice(transactionDTO.getPrice());
        }
        transactionRepository.save(transaction);
    }

    @Override
    public void updateTransaction(Long id, TransactionDTO transactionDTO)  {
        Transaction transaction = transactionRepository.getTransactionById(id)
                .orElseThrow(() -> new IllegalArgumentException("Transaction is not exist"));
        transaction.setUpdatedAt(LocalDateTime.now());
        if (transactionDTO.getPost1Id() != null) {
            Post post1 = postRepository.findById(transactionDTO.getPost1Id())
                    .orElseThrow(() -> new IllegalArgumentException("Post is not exist"));
            transaction.setPost1(post1);
        }
        if (transactionDTO.getTransactionTypeId() != null) {
            TransactionType transactionType = transactionTypeRepository.findById(transactionDTO.getTransactionTypeId())
                    .orElseThrow(() -> new IllegalArgumentException("Type is not exist"));
            transaction.setTransactionType(transactionType);
        }
        TransactionType transactionType = transaction.getTransactionType();
//                .orElseThrow(() -> new IllegalArgumentException("Type is not exist"));
        if(transactionType.getName() == TransactionTypeName.EXCHANGE){
            transaction.setPrice(0L);
            if (transactionDTO.getPost2Id() != null) {
                Post post2 = postRepository.findById(transactionDTO.getPost2Id())
                        .orElseThrow(() -> new IllegalArgumentException("Item 2 is not exist!"));
                transaction.setPost2(post2);
            }

        } else {
            transaction.setPost2(null);
            if (transactionDTO.getUser2Id() != null) {
                transaction.setUser2(userRepository.findById(transactionDTO.getUser2Id()).get());
            }
            if (transactionDTO.getPrice() != null) {
                transaction.setPrice(transactionDTO.getPrice());
            }
        }
        transactionRepository.save(transaction);
    }


    @Override
    public void updateTransactionStatus(Long id, UpdateTransactionStatusRequest request) {
        Transaction transaction = transactionRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Transaction is not exist!"));
        transaction.setUpdatedAt(LocalDateTime.now());

        TransactionStatus transactionStatus = transactionStatusRepository.findByName(request.getNewStatus()).orElseThrow(() -> new IllegalArgumentException("Status is not exist!"));
        transaction.setTransactionStatus(transactionStatus);

        transactionRepository.save(transaction);
    }

    @Override
    public Page<Transaction> getListTransactionByUser(Integer pageNo, Integer pageSize) {
        List<Transaction> list;
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        if (Objects.nonNull(getUserId())) {
            list = mapper.convertToResponseList(transactionRepository.getListTransactionByUser(getUserId()), Transaction.class);
        } else {
            throw new IllegalArgumentException("User not found");
        }

//        List<TransactionDTO> list = mapper.convertToResponseList(transactionRepository.getListTransactionByUser(getUserId()), TransactionDTO.class);
        return new PageImpl<>(list, pageable, list.size());
    }

    @Override
    public void scheduleAnExchange(Long id, ScheduleExchangeRequest scheduleExchangeRequest) {
        Transaction transaction = transactionRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Transaction is not exist!"));
        transaction.setDate(scheduleExchangeRequest.getDateTimeExchange());
        transaction.setUpdatedAt(LocalDateTime.now());
        transactionRepository.save(transaction);
    }

    @Override
    public LocalDateTime getDateByIdTransaction(Long id) {
        return transactionRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Transaction is not exist!")).getDate();
    }
}
