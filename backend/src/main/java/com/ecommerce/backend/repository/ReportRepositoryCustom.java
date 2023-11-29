package com.ecommerce.backend.repository;

import com.ecommerce.backend.domain.enums.ReportStatus;
import com.ecommerce.backend.domain.models.Report;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ReportRepositoryCustom {
    Page<Report> getAllReportByUser(Long userId, Pageable pageable);
    Page<Report> getAllReportByAdmin(Long postId, Pageable pageable);
    Page<Report> getAllReportByAdminByStatus(ReportStatus reportStatus, Long postId, Pageable pageable);


}
