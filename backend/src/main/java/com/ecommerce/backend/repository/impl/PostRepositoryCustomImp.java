package com.ecommerce.backend.repository.impl;

import com.ecommerce.backend.domain.enums.FilterSortUser;
import com.ecommerce.backend.domain.models.Post;
import com.ecommerce.backend.repository.BaseRepository;
import com.ecommerce.backend.repository.PostRepositoryCustom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Repository
public class PostRepositoryCustomImp implements PostRepositoryCustom {
    @PersistenceContext
    private EntityManager em;

    private final static String FROM_POST = " FROM ecommerce.post p ";
    private final static String JOIN_FOLLOW = " LEFT JOIN ecommerce.follow f on p.user_id = f.following_id ";
    private final static String JOIN_USER_FOLLOW = " LEFT JOIN ecommerce.user u on f.follower = u.id";


    @Override
    public Page<Post> getAllPostForParam(Long category, Integer sortBy, FilterSortUser filterSortUser, Pageable pageable, Long userId) {
        StringBuilder strQuery = new StringBuilder();
        StringBuilder joinQuery = new StringBuilder();
        strQuery.append("WHERE 1=1");

        Map<String, Object> params = new HashMap<>();
        if (Objects.nonNull(category)) {
            strQuery.append("AND p.category_id = :categoryId");
            params.put("categoryId", category);
        }
        //TODO: add filter parameter
        if (filterSortUser.getvalue().equals("follow")) {
            joinQuery.append(JOIN_FOLLOW)
                    .append(JOIN_USER_FOLLOW);
            strQuery.append("AND p.user_id = :userId");
            params.put("userId", userId);
        }
        String selectQuery = "SELECT * " + FROM_POST + joinQuery + strQuery;
        String countQuery = "SELECT COUNT(DISTINCT c.id)"+ FROM_POST + joinQuery + strQuery;


        return BaseRepository.getPagedNativeQuery(em, selectQuery, countQuery, params, pageable, Post.class);

    }
}
