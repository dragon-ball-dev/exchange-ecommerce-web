package com.ecommerce.backend.services.impl;

import com.ecommerce.backend.domain.dto.PostDTO;
import com.ecommerce.backend.domain.dto.ReportDTO;
import com.ecommerce.backend.domain.models.Post;
import com.ecommerce.backend.domain.models.Report;
import com.ecommerce.backend.domain.models.User;
import com.ecommerce.backend.domain.param.PostParam;
import com.ecommerce.backend.mapper.CommonMapper;
import com.ecommerce.backend.repository.PostRepository;
import com.ecommerce.backend.repository.ReportRepository;
import com.ecommerce.backend.repository.ReportRepositoryCustom;
import com.ecommerce.backend.repository.UserRepository;
import com.ecommerce.backend.services.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
@Service
@RequiredArgsConstructor
public class ReportServiceImp implements ReportService{
    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final ReportRepository reportRepository;
    private final ReportRepositoryCustom reportRepositoryCustom;
    private final CommonMapper mapper;

    @Override
    public void createNewReportByUser(ReportDTO reportDTO) {
        Report report = Report.builder()
                .content(reportDTO.getContent())
                .build();
        report.setCreatedAt(LocalDateTime.now());

        User user = userRepository.findById(reportDTO.getUserId()).orElseThrow(() -> new IllegalArgumentException("User is not exist!"));
        if(user.getIsLocked()){
            throw new IllegalArgumentException("User locked ");
        }
        report.setUserId(user);
        Post post = postRepository.findById(reportDTO.getPostId()).orElseThrow(() -> new IllegalArgumentException("Post is not exist!"));
        report.setPostId(post);
        reportRepository.save(report);
    }

    @Override
    public Page<ReportDTO> getPagingReportByUser(Long userId,Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<Report> reportPage = reportRepositoryCustom.getAllReportByUser(userId,pageable);
        return mapper.convertToResponsePage(reportPage,ReportDTO.class,pageable);
    }

    @Override
    public Page<ReportDTO> getPagingReportByAdmin(Long postId, Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<Report> reportPage = reportRepositoryCustom.getAllReportByAdmin(postId,pageable);
        return mapper.convertToResponsePage(reportPage,ReportDTO.class,pageable);
    }

    @Override
    public Integer countRequestReportOfCustomer() {
        return null;
    }

    @Override
    public void handleReportByAdmin() {

    }
}
