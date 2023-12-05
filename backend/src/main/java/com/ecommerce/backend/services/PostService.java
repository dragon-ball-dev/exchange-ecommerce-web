package com.ecommerce.backend.services;

import com.ecommerce.backend.domain.dto.PostDTO;
import com.ecommerce.backend.domain.enums.FilterSortUser;
import com.ecommerce.backend.domain.models.Post;
import org.springframework.data.domain.Page;

public interface PostService {
    void  createNewPostByUser(PostDTO postDTO);
    Page<Post> getPagingPost(Integer pageNo, Integer pageSize);
    Page<Post> getPagingPostFilter(Long category, Integer sortBy, FilterSortUser filterSortUser, Integer pageNo, Integer pageSize);
    Post getPostById(Long id);
    void updatePost(Long id, PostDTO postDTO);
    void lockPost(Long id);
    void unlockPost(Long id);

    void repostExistingPost(Long id);

    void deletePost(Long id);
    void updateLike(Long id);

    Page<PostDTO> getPostByUser(Long userId, Integer pageNo, Integer pageSize);
    Page<PostDTO> getLikedPostsByUser(Long userId, Integer pageNo, Integer pageSize);

}
