package com.ecommerce.backend.repository;

import com.ecommerce.backend.domain.models.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLikePostRepository extends JpaRepository<Report, Long> {
    @Query(value = "SELECT COUNT(pl.user_id) FROM user_post_like pl WHERE post_id = :postId GROUP BY pl.post_id", nativeQuery = true)
    Integer countUsersLike(Long postId);

}
