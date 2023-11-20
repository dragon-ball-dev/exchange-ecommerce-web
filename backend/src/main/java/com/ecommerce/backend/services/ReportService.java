package com.ecommerce.backend.services;

import com.ecommerce.backend.domain.dto.PostDTO;
import com.ecommerce.backend.domain.dto.ReportDTO;
import com.ecommerce.backend.domain.param.PostParam;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.Query;

public interface ReportService {
    void  createNewReportByUser(ReportDTO reportDTO);
    Page<ReportDTO> getPagingReportByUser(Long userId,Integer pageNo, Integer pageSize);
    Page<ReportDTO> getPagingReportByAdmin(Long userId,Integer pageNo, Integer pageSize);
    Integer countRequestReportOfCustomer();
    void handleReportByAdmin();
}
