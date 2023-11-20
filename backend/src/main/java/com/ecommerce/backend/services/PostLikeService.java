package com.ecommerce.backend.services;

public interface PostLikeService {
    void handleLikePost(Long userId, Long postId);

}
