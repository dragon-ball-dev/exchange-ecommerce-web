package com.ecommerce.backend.domain.models;

import com.ecommerce.backend.domain.enums.TransactionStatusName;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
@Table(name = "transaction_status")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TransactionStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 60)
    private TransactionStatusName name;

}
