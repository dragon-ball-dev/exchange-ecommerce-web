package com.ecommerce.backend.repository;

import com.ecommerce.backend.domain.models.Transaction;
import com.ecommerce.backend.domain.models.TransactionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    @Query(value = "SELECT transaction_type.* FROM transaction_type WHERE transaction_type.id = :transactionTypeId", nativeQuery = true)
    Optional<TransactionType> getTransactionTypeByID(Long transactionTypeId);

//    @Query(value = "SELECT transaction_status FROM transaction t " +
//            "JOIN transaction_status s ON t.transaction_status_id = s.id " +
//            "WHERE t.transaction_status_id = :transactionStatusId", nativeQuery = true)
//    Optional<TransactionStatus> getTransactionStatusByID(Long transactionStatusId);

//    @Query(value = "from Transaction t where (Transaction.post1.userId.id= ?1 OR IF(Transaction.post2 IS NOT NULL)) ")
    @Query(value = "SELECT * FROM transaction "+
            "WHERE post1_id IN (SELECT id FROM post WHERE user_id = :userId) "+
            "OR post2_id IN (SELECT id FROM post WHERE user_id = :userId) "+
            "OR user2_id = :userId", nativeQuery = true)
    List<Transaction> getListTransactionByUser(Long userId);

//    @Query(value = "FROM transaction t SELECT t.date WHERE t.id = :id", nativeQuery = true)
//    String findDateByIdTransaction(Long id);

    @Query(value = "SELECT * FROM transaction t WHERE t.id = :id", nativeQuery = true)
    Optional<Transaction> getTransactionById(Long id);

}
