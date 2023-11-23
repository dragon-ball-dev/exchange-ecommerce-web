package com.ecommerce.backend.repository;

import com.ecommerce.backend.domain.models.Follow;
import com.ecommerce.backend.domain.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FollowRepository extends JpaRepository<Follow, Long> , FollowRepositoryCustom{
    Optional<Follow> findByFollowerIdAndFollowerId(User followerId, User followingId);

}
