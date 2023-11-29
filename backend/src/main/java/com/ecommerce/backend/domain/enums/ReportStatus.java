package com.ecommerce.backend.domain.enums;

public enum ReportStatus {

    UNREAD(1),
    READ(2),
    NOTHANDLED(3),
    HANDLED(4),
    ALL(5);
    private int value;

    ReportStatus(int value){
        this.value = value;
    }

    public int getValue(){
        return this.value;
    }
}
