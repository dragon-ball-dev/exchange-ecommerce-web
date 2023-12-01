package com.ecommerce.backend.repository;

import com.ecommerce.backend.domain.enums.TransactionStatusName;
import com.ecommerce.backend.domain.models.TransactionStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TransactionStatusRepository extends JpaRepository<TransactionStatus, Long> {

    Optional<TransactionStatus> findByName(TransactionStatusName name);
}
