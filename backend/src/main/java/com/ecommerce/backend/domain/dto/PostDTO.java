package com.ecommerce.backend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostDTO {
    private Long id;
    private String content;
    private String title;
    private String image;
    private LocalDateTime date;
    private Integer itemStatus;
    private Boolean isCompleted;
    private Long userId;
    private Long categoryId;
}
