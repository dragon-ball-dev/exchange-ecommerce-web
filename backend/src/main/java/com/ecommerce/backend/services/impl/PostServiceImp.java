package com.ecommerce.backend.services.impl;

import com.ecommerce.backend.domain.dto.PostDTO;
import com.ecommerce.backend.domain.enums.FilterSortUser;
import com.ecommerce.backend.domain.models.Category;
import com.ecommerce.backend.domain.models.Post;
import com.ecommerce.backend.domain.models.User;
import com.ecommerce.backend.mapper.CommonMapper;
import com.ecommerce.backend.repository.*;
import com.ecommerce.backend.services.BaseService;
import com.ecommerce.backend.services.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostServiceImp extends BaseService implements PostService {
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final PostRepository postRepository;
    private final PostRepositoryCustom postRepositoryCustom;
    private final CommonMapper mapper;
    private final UserLikePostRepository userLikePostRepository;

    @Override
    public void createNewPostByUser(PostDTO postDTO) {
        Post post = Post.builder()
                .image(postDTO.getImage())
                .title(postDTO.getTitle())
                .itemStatus(postDTO.getItemStatus())
                .content(postDTO.getContent())
                .date(postDTO.getDate())
                .isComplete(false)
                .likeCount(0L)
                .build();
        if (postDTO.getCategoryId() != null) {
            Category category = categoryRepository.findById(postDTO.getCategoryId())
                    .orElseThrow(() -> new IllegalArgumentException("Category is not exist!"));
            post.setCategoryId(category);
        }

        User user = userRepository.findById(getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User is not exist!"));
        post.setUserId(user);
        post.setCreatedAt(LocalDateTime.now());
        postRepository.save(post);


    }

    @Override
    public Page<PostDTO> getPagingPost(Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<Post> postPage = postRepository.findAll(pageable);
        return mapper.convertToResponsePage(postPage, PostDTO.class, pageable);
    }

    @Override
    public Page<PostDTO> getPagingPostFilter(Long category, Integer sortBy, FilterSortUser filterSortUser, Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<Post> postPage = postRepositoryCustom.getAllPostForParam(category, sortBy, filterSortUser, pageable, getUserId());
        return mapper.convertToResponsePage(postPage, PostDTO.class, pageable);
    }


    @Override
    public PostDTO getPostById(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Post is not exist!"));
        return mapper.convertToResponse(post, PostDTO.class);
    }

    @Override
    public void updatePost(Long id, PostDTO postDTO) {
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Post is not exist!"));
        post.setUpdatedAt(LocalDateTime.now());
        post.setContent(postDTO.getContent());
        post.setImage(postDTO.getImage());
        post.setTitle(postDTO.getTitle());
        post.setDate(postDTO.getDate());
        post.setItemStatus(postDTO.getItemStatus());
        Category category = categoryRepository.findById(postDTO.getCategoryId()).orElseThrow(() -> new IllegalArgumentException("category is not exist!"));
        post.setCategoryId(category);
        postRepository.save(post);
    }

    @Override
    public void lockPost(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Post is not exist!"));
        User currentUser = userRepository.findById(getUserId())
                .orElseThrow(() -> new IllegalStateException("Current user does not exist!"));
        if (post.getUserId().equals(currentUser)) {
            post.setUpdatedAt(LocalDateTime.now());
            post.setComplete(true);
            postRepository.save(post);
        } else {
            throw new IllegalStateException("User does not have permission to modify this post!");
        }
    }

    @Override
    public void unlockPost(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Post is not exist!"));
        User currentUser = userRepository.findById(getUserId())
                .orElseThrow(() -> new IllegalStateException("Current user does not exist!"));

        if (post.getUserId().equals(currentUser)) {
            post.setUpdatedAt(LocalDateTime.now());
            post.setComplete(false);
            postRepository.save(post);
        } else {
            throw new IllegalStateException("User does not have permission to modify this post!");
        }
    }

    public void repostExistingPost(Long id) {
        Post existingPost = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Post does not exist!"));
        Post repost = Post.builder()
                .image(existingPost.getImage())
                .title(existingPost.getTitle())
                .itemStatus(existingPost.getItemStatus())
                .content(existingPost.getContent())
                .date(existingPost.getDate())
                .isComplete(false)
                .likeCount(0L)
                .categoryId(existingPost.getCategoryId())
                .userId(existingPost.getUserId())
                .build();
        repost.setCreatedAt(LocalDateTime.now());
        postRepository.save(repost);
    }

    @Override
    public void deletePost(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Post does not exist!"));

        User currentUser = userRepository.findById(getUserId())
                .orElseThrow(() -> new IllegalStateException("Current user does not exist!"));

        if (post.getUserId().equals(currentUser)) {
            postRepository.deleteById(id);
        } else {
            throw new IllegalStateException("User does not have permission to delete this post!");
        }
    }

    @Override
    public void updateLike(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Post does not exist!"));

        Long likeCount = userLikePostRepository.countUsersLike(id);

        if (likeCount != null) {
            post.setLikeCount(likeCount);
            postRepository.save(post);
        }
    }

    @Override
    public Page<PostDTO> getPostByUser(Long userId, Integer pageNo, Integer pageSize) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User does not exist!"));
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<Post> postPage = postRepository.findByUserId(user,pageable);
        return mapper.convertToResponsePage(postPage, PostDTO.class, pageable);
    }

    @Override
    public Page<PostDTO> getLikedPostsByUser(Long userId, Integer pageNo, Integer pageSize) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User does not exist!"));
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<Post> postPage = postRepositoryCustom.findByLikedPostsId(user,pageable);
        return mapper.convertToResponsePage(postPage, PostDTO.class, pageable);
    }
}
