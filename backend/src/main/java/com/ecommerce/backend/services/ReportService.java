package com.ecommerce.backend.services;

import com.ecommerce.backend.domain.dto.ReportDTO;
import com.ecommerce.backend.domain.enums.ReportStatus;
import org.springframework.data.domain.Page;

public interface ReportService {
    void  createNewReportByUser(ReportDTO reportDTO);
    Page<ReportDTO> getPagingReportByUser(Integer pageNo, Integer pageSize);
    Page<ReportDTO> getPagingReportByAdmin(Long postId,Integer pageNo, Integer pageSize);
    Page<ReportDTO> getPagingReportByAdminByStatus(ReportStatus reportStatus, Long postId, Integer pageNo, Integer pageSize);
    void handleReportByAdmin();
}
