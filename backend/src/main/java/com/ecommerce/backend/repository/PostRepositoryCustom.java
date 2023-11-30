package com.ecommerce.backend.repository;

import com.ecommerce.backend.domain.dto.PostDTO;
import com.ecommerce.backend.domain.enums.FilterSortUser;
import com.ecommerce.backend.domain.models.Post;
import com.ecommerce.backend.domain.models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepositoryCustom {
    Page<Post> getAllPostForParam(Long category, Integer sortBy, FilterSortUser filterSortUser, Pageable pageable, Long userId);
    Page<Post> findByLikedPostsId(User userId, Pageable pageable);
}
