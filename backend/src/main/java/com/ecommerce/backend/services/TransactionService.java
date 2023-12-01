package com.ecommerce.backend.services;

import com.ecommerce.backend.domain.dto.TransactionDTO;
import com.ecommerce.backend.domain.payload.request.ScheduleExchangeRequest;
import com.ecommerce.backend.domain.payload.request.UpdateTransactionStatusRequest;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;

public interface TransactionService {

    void createNewTrade(TransactionDTO tradeDTO);
    void updateTransactionStatus(Long id, UpdateTransactionStatusRequest request);
    Page<TransactionDTO> getListTransactionByUser(Integer pageNo, Integer pageSize);
    void scheduleAnExchange(Long id, ScheduleExchangeRequest scheduleExchangeRequest);
    LocalDateTime getDateByIdTransaction(Long id);

}
