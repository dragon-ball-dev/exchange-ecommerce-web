package com.ecommerce.backend.repository;

import com.ecommerce.backend.domain.dto.LikePostDTO;

import java.util.List;

public interface UserLikePostRepositoryCustom {
    List<LikePostDTO> getAllPostsWithLikeCount();
    void updateLikeCount(Long post_id);
}
