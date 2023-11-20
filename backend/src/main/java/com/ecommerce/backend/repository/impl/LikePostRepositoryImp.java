package com.ecommerce.backend.repository.impl;

import com.ecommerce.backend.repository.BaseRepository;
import com.ecommerce.backend.repository.LikePostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Repository
public class LikePostRepositoryImp implements LikePostRepository {
    @PersistenceContext
    private EntityManager em;
    private final static String FROM_POST_LIKE = " FROM ecommerce.user_post_like pl ";
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;


    @Autowired
    public LikePostRepositoryImp(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }
    @Override
    public void likePost(Long userId, Long postId) {
        if (Objects.nonNull(userId) && Objects.nonNull(postId)) {
            String strQuery = "INSERT INTO user_post_like (user_id, post_id) VALUES (:userId, :postId)";
            Map<String, Object> params = new HashMap<>();
            params.put("userId", userId);
            params.put("postId", postId);
            namedParameterJdbcTemplate.update(strQuery, params);
        }
    }

    @Override
    public void unlikePost(Long userId, Long postId) {
        if (Objects.nonNull(userId) && Objects.nonNull(postId)) {
            String strQuery = "DELETE FROM user_post_like WHERE user_id = :userId AND post_id = :postId";
            Map<String, Object> params = new HashMap<>();
            params.put("userId", userId);
            params.put("postId", postId);
            namedParameterJdbcTemplate.update(strQuery, params);
        }
    }


    @Override
    public Integer countUsersLike(Long postId) {
        String strQuery = "SELECT COUNT(user_id) FROM user_post_like WHERE post_id = :postId";
        Map<String, Object> params = new HashMap<>();
        params.put("postId", postId);

        return namedParameterJdbcTemplate.queryForObject(strQuery, params, Integer.class);
    }

    @Override
    public boolean existsByUser_IdAndPost_Id(Long userId, Long postId) {
        String strQuery = "SELECT COUNT(*) FROM user_post_like WHERE user_id = :userId AND post_id = :postId";
        Map<String, Object> params = new HashMap<>();
        params.put("userId", userId);
        params.put("postId", postId);

        Integer count = namedParameterJdbcTemplate.queryForObject(strQuery, params, Integer.class);
        return count != null && count > 0;
    }
}
