package com.ecommerce.backend.services;

public interface PostLikeService {
    void handleLikePost(Long postId);
    Integer countLikesForPost(Long postId);
}
