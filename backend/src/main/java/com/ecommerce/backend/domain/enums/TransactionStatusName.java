package com.ecommerce.backend.domain.enums;

public enum TransactionStatusName {
    NEGOTIATING("NEGOTIATING"),
    COMPLETED("COMPLETED"),
    CANCELED("CANCELED");


    private String value;

    TransactionStatusName(String value){
        this.value = value;
    }

    public String getValue(){
        return this.value;
    }
}
