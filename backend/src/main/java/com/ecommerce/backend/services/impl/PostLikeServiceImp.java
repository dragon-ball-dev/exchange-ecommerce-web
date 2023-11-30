package com.ecommerce.backend.services.impl;

import com.ecommerce.backend.domain.models.Post;
import com.ecommerce.backend.domain.models.User;
import com.ecommerce.backend.repository.PostRepository;
import com.ecommerce.backend.repository.UserRepository;
import com.ecommerce.backend.services.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import com.ecommerce.backend.services.PostLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class  PostLikeServiceImp extends BaseService implements PostLikeService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;


    public void handleLikePost(Long postId) {
        if (Objects.nonNull(getUserId()) && Objects.nonNull(postId)) {
            User user = userRepository.findById(getUserId())
                    .orElseThrow(() -> new IllegalArgumentException("User not found"));
            Post post = postRepository.findById(postId)
                    .orElseThrow(() -> new IllegalArgumentException("Post not found"));
            Set<User> likedPosts = post.getLikedPosts();

            if (likedPosts.contains(user)) {
                likedPosts.remove(user);
            } else {
                likedPosts.add(user);
            }
            postRepository.save(post);
        }
    }

}
