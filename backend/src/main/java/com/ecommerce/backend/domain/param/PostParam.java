package com.ecommerce.backend.domain.param;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostParam {

    private Long categoryId;
    private LocalDateTime date;
    private String title;

}
