package com.ecommerce.backend.domain.payload.request;

import com.ecommerce.backend.domain.enums.TransactionStatusName;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.time.LocalDateTime;

@Getter
@Setter
public class ScheduleExchangeRequest {

    private Instant dateTimeExchange;
}
