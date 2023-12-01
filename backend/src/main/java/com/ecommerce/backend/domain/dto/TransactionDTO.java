package com.ecommerce.backend.domain.dto;

import com.ecommerce.backend.domain.models.TransactionStatus;
import com.ecommerce.backend.domain.models.TransactionType;
import com.ecommerce.backend.domain.models.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDTO {
    Long id;
    Long post1Id;
    private Long transactionTypeId;
    private Long tradeStatusId;
    private LocalDateTime date;
    Long post2Id;
    private Long user2Id;
    private Long price;
}
