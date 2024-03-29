package com.ecommerce.backend.repository.impl;

import com.ecommerce.backend.domain.models.Follow;
import com.ecommerce.backend.repository.BaseRepository;
import com.ecommerce.backend.repository.FollowRepositoryCustom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Repository
public class FollowRepositoryCustomImpl implements FollowRepositoryCustom {

    @PersistenceContext
    private EntityManager em;

    private static final String FROM_REQUEST = " from ecommerce.follow f ";
    @Override
    public Page<Follow> getPageFollow(Long userId, Pageable pageable) {

        StringBuilder strQuery = new StringBuilder();
        strQuery.append(FROM_REQUEST);

        strQuery.append(" where 1=1");
        Map<String, Object> params = new HashMap<>();

        if (Objects.nonNull(userId)) {
            strQuery.append(" AND f.follower_id = :userId");
            params.put("userId", userId);
        }
        String strSelectQuery = "SELECT * " + strQuery;

        String strCountQuery = "SELECT COUNT(*)" + strQuery;
        return BaseRepository.getPagedNativeQuery(em,strSelectQuery, strCountQuery, params, pageable, Follow.class);

    }
}
