package com.ecommerce.backend.services.impl;

import com.ecommerce.backend.domain.dto.PostDTO;
import com.ecommerce.backend.domain.enums.FilterSortUser;
import com.ecommerce.backend.domain.models.Category;
import com.ecommerce.backend.domain.models.Post;
import com.ecommerce.backend.domain.models.User;
import com.ecommerce.backend.mapper.CommonMapper;
import com.ecommerce.backend.repository.CategoryRepository;
import com.ecommerce.backend.repository.PostRepository;
import com.ecommerce.backend.repository.PostRepositoryCustom;
import com.ecommerce.backend.repository.UserRepository;
import com.ecommerce.backend.services.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class PostServiceImp implements PostService {
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final PostRepository postRepository;
    private final PostRepositoryCustom postRepositoryCustom;
    private final CommonMapper mapper;

    @Override
    public void createNewPostByUser(PostDTO postDTO) {
        Post post = Post.builder()
                .image(postDTO.getImage())
                .title(postDTO.getTitle())
                .itemStatus(postDTO.getItemStatus())
                .content(postDTO.getContent())
                .date(postDTO.getDate())
                .isComplete(false)
                .build();
        if (postDTO.getCategoryId() != null) {
            Category category = categoryRepository.findById(postDTO.getCategoryId())
                    .orElseThrow(() -> new IllegalArgumentException("Category is not exist!"));
            post.setCategoryId(post.getCategoryId());
        }
        if (postDTO.getUserId() != null) {
            User user = userRepository.findById(postDTO.getUserId())
                    .orElseThrow(() -> new IllegalArgumentException("User is not exist!"));
            post.setUserId(post.getUserId());
            post.setCreatedAt(LocalDateTime.now());
            postRepository.save(post);
        }

    }

    @Override
    public Page<PostDTO> getPagingPost(Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<Post> postPage = postRepository.findAll(pageable);
        return mapper.convertToResponsePage(postPage, PostDTO.class, pageable);
    }

    @Override
    public Page<PostDTO> getPagingPostFilter(Long category, Integer sortBy, FilterSortUser filterSortUser, Integer pageNo, Integer pageSize, Long userId) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<Post> postPage = postRepositoryCustom.getAllPostForParam(category,sortBy,filterSortUser, pageable,userId);
        return mapper.convertToResponsePage(postPage, PostDTO.class, pageable);
    }


    @Override
    public PostDTO getPostById(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Post is not exist!"));
        return mapper.convertToResponse(post, PostDTO.class);
    }

    @Override
    public void updatePost(Long id, Long userId, PostDTO postDTO) {
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Post is not exist!"));
        post.setUpdatedAt(LocalDateTime.now());
        Category category = categoryRepository.findById(postDTO.getCategoryId()).orElseThrow(() -> new IllegalArgumentException("category is not exist!"));
        post.setCategoryId(category);
        postRepository.save(post);
    }

    @Override
    public void lockPost(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Post is not exist!"));
        post.setUpdatedAt(LocalDateTime.now());
        post.setComplete(true);
        postRepository.save(post);
    }

    @Override
    public void unlockPost(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Post is not exist!"));
        post.setUpdatedAt(LocalDateTime.now());
        post.setComplete(false);
        postRepository.save(post);
    }

    public void repostExistingPost(Long id,PostDTO postDTO) {
        Post existingPost = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Post does not exist!"));
        Post repost = Post.builder()
                .image(existingPost.getImage())
                .title(existingPost.getTitle())
                .itemStatus(existingPost.getItemStatus())
                .content(existingPost.getContent())
                .date(existingPost.getDate())
                .isComplete(false)
                .build();

        // Kiểm tra và set lại category nếu có
        if (postDTO.getCategoryId() != null) {
            Category category = categoryRepository.findById(postDTO.getCategoryId())
                    .orElseThrow(() -> new IllegalArgumentException("Category does not exist!"));
            repost.setCategoryId(category);
        }

        // Kiểm tra và set lại user nếu có
        if (postDTO.getUserId() != null) {
            User user = userRepository.findById(postDTO.getUserId())
                    .orElseThrow(() -> new IllegalArgumentException("User does not exist!"));
            repost.setUserId(user);
            repost.setCreatedAt(LocalDateTime.now());
            postRepository.save(repost);
        }
    }

}