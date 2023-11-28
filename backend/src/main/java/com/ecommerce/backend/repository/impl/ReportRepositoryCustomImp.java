package com.ecommerce.backend.repository.impl;

import com.ecommerce.backend.domain.enums.ReportStatus;
import com.ecommerce.backend.domain.models.Post;
import com.ecommerce.backend.domain.models.Report;
import com.ecommerce.backend.repository.BaseRepository;
import com.ecommerce.backend.repository.ReportRepositoryCustom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Repository
public class ReportRepositoryCustomImp implements ReportRepositoryCustom {

    @PersistenceContext
    private EntityManager em;

    private final static String FROM_REPORT = " FROM ecommerce.report rp ";

    private final static String JOIN_TABLE_POST = " LEFT JOIN ecommerce.post p on rp.post_id = p.id ";


    @Override
    public Page<Report> getAllReportByUser(Long userId, Pageable pageable) {
        StringBuilder strQuery = new StringBuilder();
        strQuery.append(" WHERE 1=1");
        Map<String, Object> params = new HashMap<>();

        if (Objects.nonNull(userId) && userId != 0) {
            strQuery.append(" AND rp.user_id = :userId");
            params.put("userId", userId);
        }
        String strSelectQuery = "SELECT * " + FROM_REPORT + strQuery;
        String strCountQuery = "SELECT COUNT(DISTINCT c.id)" + FROM_REPORT  + strQuery;
        return BaseRepository.getPagedNativeQuery(em,strSelectQuery, strCountQuery, params, pageable, Report.class);
    }

    @Override
    public Page<Report> getAllReportByAdmin(Long postId, Pageable pageable) {
        StringBuilder strQuery = new StringBuilder();
        StringBuilder joinQuery = new StringBuilder();
        strQuery.append(" WHERE 1=1");
        Map<String, Object> params = new HashMap<>();
        if (Objects.nonNull(postId) && postId != 0) {
            strQuery.append(" AND rp.post_id = :postId");
            joinQuery.append(JOIN_TABLE_POST);
            params.put("postId", postId);
        }
        String strSelectQuery = "SELECT * " + FROM_REPORT + joinQuery + strQuery;
        String strCountQuery = "SELECT COUNT(DISTINCT c.id)" + FROM_REPORT + joinQuery + strQuery;
        return BaseRepository.getPagedNativeQuery(em,strSelectQuery, strCountQuery, params, pageable, Report.class);
    }

    @Override
    public Page<Report> getAllReportByAdminByStatus(ReportStatus reportStatus, Long postId, Pageable pageable) {
        StringBuilder strQuery = new StringBuilder();
        strQuery.append(" WHERE 1=1");
        Map<String, Object> params = new HashMap<>();

        if(Objects.nonNull(reportStatus)){
            strQuery.append(" AND rp.status = :status");
            params.put("status", "%" + reportStatus.getValue() + "%");
        }
        if (Objects.nonNull(postId) && postId != 0) {
            strQuery.append(" AND rp.post_id = :postId");
            params.put("postId", "%" +postId+"%");
        }

        String strSelectQuery = "SELECT * " + FROM_REPORT + strQuery;
        String strCountQuery = "SELECT COUNT(DISTINCT c.id)" + FROM_REPORT  + strQuery;
        return BaseRepository.getPagedNativeQuery(em,strSelectQuery, strCountQuery, params, pageable, Report.class);
    }

}
