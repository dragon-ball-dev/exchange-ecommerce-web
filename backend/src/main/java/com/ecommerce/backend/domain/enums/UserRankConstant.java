package com.ecommerce.backend.domain.enums;

public enum UserRankConstant {
    USER_RANK_FRESHER("RANK1"),
    USER_RANK_JUNIOR("RANK2"),
    USER_RANK_MIDDLE("RANK3"),
    USER_RANK_SENIOR("RANK4");
    private String value;

    UserRankConstant(String value){
        this.value = value;
    }

    public String getValue(){
        return this.value;
    }

}
