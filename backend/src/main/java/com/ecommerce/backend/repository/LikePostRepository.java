package com.ecommerce.backend.repository;

import org.springframework.data.jpa.repository.Modifying;


public interface LikePostRepository {
    //TODO: add user-like-dislike
    void likePost(Long userId, Long postId);
    void unlikePost( Long userId, Long postId);
    Integer countUsersLike(Long postId);
    boolean existsByUser_IdAndPost_Id(Long userId, Long postId);
}
