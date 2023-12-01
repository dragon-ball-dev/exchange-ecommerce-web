package com.ecommerce.backend.repository;

import com.ecommerce.backend.domain.models.Transaction;
import com.ecommerce.backend.domain.models.TransactionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionTypeRepository extends JpaRepository<TransactionType, Long> {
}
