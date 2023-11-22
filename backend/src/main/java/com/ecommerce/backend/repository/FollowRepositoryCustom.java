package com.ecommerce.backend.repository;

import com.ecommerce.backend.domain.models.Follow;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface FollowRepositoryCustom {
    Page<Follow> getPageFollow(Long userId, Pageable pageable);
}
