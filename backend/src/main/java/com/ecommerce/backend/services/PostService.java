package com.ecommerce.backend.services;

import com.ecommerce.backend.domain.dto.PostDTO;
import com.ecommerce.backend.domain.enums.FilterSortUser;
import org.springframework.data.domain.Page;

public interface PostService {
    void  createNewPostByUser(PostDTO postDTO);
    Page<PostDTO> getPagingPost( Integer pageNo, Integer pageSize);
    Page<PostDTO> getPagingPostFilter(Long category, Integer sortBy, FilterSortUser filterSortUser, Integer pageNo, Integer pageSize);
    PostDTO getPostById(Long id);
    void updatePost(Long id, PostDTO postDTO);
    void lockPost(Long id);
    void unlockPost(Long id);

    void repostExistingPost(Long id);

    void deletePost(Long id);
}
