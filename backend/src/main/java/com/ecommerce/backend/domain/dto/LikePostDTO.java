package com.ecommerce.backend.domain.dto;

import com.ecommerce.backend.domain.models.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LikePostDTO {
    private Post post;
    private Long likeCount;
}
