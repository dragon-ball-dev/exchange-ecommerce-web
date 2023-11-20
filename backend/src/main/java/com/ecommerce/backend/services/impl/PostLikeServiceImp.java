package com.ecommerce.backend.services.impl;

import com.ecommerce.backend.repository.LikePostRepository;
import com.ecommerce.backend.services.PostLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostLikeServiceImp implements PostLikeService {
    private final LikePostRepository userLikePostRepository;

    @Override
    public void handleLikePost(Long userId, Long postId) {
        if (userLikePostRepository.existsByUser_IdAndPost_Id(userId, postId)) {
            userLikePostRepository.unlikePost(userId, postId);
        } else {
            userLikePostRepository.likePost(userId, postId);
        }
    }
}
