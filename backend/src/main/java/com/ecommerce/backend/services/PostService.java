package com.ecommerce.backend.services;

import com.ecommerce.backend.domain.dto.PostDTO;
import com.ecommerce.backend.domain.param.PostParam;
import org.springframework.data.domain.Page;

public interface PostService {
    void  createNewPostByUser(PostDTO postDTO);
    Page<PostDTO> getPagingPost( Integer pageNo, Integer pageSize);
    Page<PostDTO> getPagingPostFilter(PostParam postParam, Integer pageNo, Integer pageSize);
    PostDTO getPostById(Long id);
    void updatePost(Long id,Long userId,PostDTO postDTO);
    void lockPost(Long id);
    void unlockPost(Long id);

    void repostExistingPost(Long id,PostDTO postDTO);
}
