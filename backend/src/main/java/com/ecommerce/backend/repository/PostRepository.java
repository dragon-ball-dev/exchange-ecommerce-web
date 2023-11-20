package com.ecommerce.backend.repository;

import com.ecommerce.backend.domain.models.Category;
import com.ecommerce.backend.domain.models.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
}
