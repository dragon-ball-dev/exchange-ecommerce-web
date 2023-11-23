package com.ecommerce.backend.repository;

import com.ecommerce.backend.domain.enums.FilterSortUser;
import com.ecommerce.backend.domain.models.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PostRepositoryCustom {
    Page<Post> getAllPostForParam(Long category, Integer sortBy, FilterSortUser filterSortUser, Pageable pageable, Long userId);
}