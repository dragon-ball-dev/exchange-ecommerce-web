package com.ecommerce.backend.repository;

import com.ecommerce.backend.domain.dto.PostDTO;
import com.ecommerce.backend.domain.models.Post;
import com.ecommerce.backend.domain.param.PostParam;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PostRepositoryCustom {
    Page<Post> getAllPostForParam(PostParam postParam, Pageable pageable);
}
