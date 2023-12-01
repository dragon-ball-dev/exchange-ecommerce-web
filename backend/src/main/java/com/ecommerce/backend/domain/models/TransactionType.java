package com.ecommerce.backend.domain.models;

import com.ecommerce.backend.domain.enums.TransactionTypeName;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
@Table(name = "transaction_type")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TransactionType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 60)
    private TransactionTypeName name;
}
