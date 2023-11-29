package com.ecommerce.backend.repository.impl;

import com.ecommerce.backend.domain.dto.LikePostDTO;
import com.ecommerce.backend.repository.BaseRepository;
import com.ecommerce.backend.repository.UserLikePostRepositoryCustom;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public class UserLikePostRepositoryCustomImp implements UserLikePostRepositoryCustom {
    @PersistenceContext
    private EntityManager em;
    @Override
    public List<LikePostDTO> getAllPostsWithLikeCount() {
        String query =
                "SELECT p, COUNT(pl.user_id) AS likeCount " +
                        "FROM  ecommerce.Post p " +
                        "LEFT JOIN ecommerce.user_post_like pl ON p.id = pl.post_id " +
                        "GROUP BY p.id";

        return em.createQuery(query, LikePostDTO.class)
                .getResultList();
    }

    @Override
    public void updateLikeCount(Long post_id) {

    }
}
