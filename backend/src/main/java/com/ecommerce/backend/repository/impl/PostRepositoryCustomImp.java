package com.ecommerce.backend.repository.impl;

import com.ecommerce.backend.domain.dto.PostDTO;
import com.ecommerce.backend.domain.models.Post;
import com.ecommerce.backend.domain.param.PostParam;
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

    @Override
    public Page<Post> getAllPostForParam(PostParam postParam, Pageable pageable) {
        StringBuilder strQuery = new StringBuilder();
        strQuery.append(FROM_POST);
        strQuery.append("WHERE 1=1");

        Map<String, Object> params = new HashMap<>();
        if(Objects.nonNull(postParam.getCategoryId())  ){
            strQuery.append("AND p.category_id = :categoryId");
            params.put("categoryId",postParam.getCategoryId());
        }
        //TODO: add filter parameter
        String selectQuery = "SELECT * " + strQuery ;
        String countQuery = "SELECT COUNT(DISTINCT c.id)" + strQuery;


        return BaseRepository.getPagedNativeQuery(em,selectQuery, countQuery,params,pageable, Post.class);

    }
}
