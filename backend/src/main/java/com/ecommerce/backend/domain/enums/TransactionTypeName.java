package com.ecommerce.backend.domain.enums;

public enum TransactionTypeName {
    EXCHANGE("EXCHANGE"),
    PURCHASE("PURCHASE");

    private String value;

    TransactionTypeName(String value){
        this.value = value;
    }

    public String getValue(){
        return this.value;
    }
}
