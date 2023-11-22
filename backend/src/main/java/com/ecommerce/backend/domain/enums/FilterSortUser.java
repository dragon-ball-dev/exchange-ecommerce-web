package com.ecommerce.backend.domain.enums;

public enum FilterSortUser {
    FOLLOW("follow"),
    TRADEDWITH("tradedwith"),
        EVERYONE("everyone");

    private String value;
    FilterSortUser(String value) {
        this.value = value;
    }
    public String getvalue() {
        return value;
    }
}
