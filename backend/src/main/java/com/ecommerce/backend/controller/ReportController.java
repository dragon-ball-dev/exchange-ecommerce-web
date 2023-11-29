package com.ecommerce.backend.controller;

import com.ecommerce.backend.config.Constant;
import com.ecommerce.backend.controller.base.BaseController;
import com.ecommerce.backend.controller.base.message.ExtendedMessage;
import com.ecommerce.backend.domain.dto.ReportDTO;
import com.ecommerce.backend.domain.enums.ReportStatus;
import com.ecommerce.backend.services.ReportService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/report")
@RequiredArgsConstructor
@SecurityRequirement(name = "Bearer Authentication")
public class ReportController extends BaseController {
    private final ReportService reportService;

    @GetMapping("/user")
    @Operation(summary = "get paging of report by user")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "get paging of report by user successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    private ResponseEntity<?> getAllReportByUser(@RequestParam Integer pageNo,
                                                 @RequestParam Integer pageSize) {
        return createSuccessResponse("get paging of report by user", reportService.getPagingReportByUser(pageNo, pageSize));
    }

    @GetMapping("/admin")
    @Operation(summary = "get paging of report by admin")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "get paging of report by admin successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    private ResponseEntity<?> getAllReportByAdmin(@RequestParam Integer pageNo,
                                                 @RequestParam Long postId,
                                                 @RequestParam Integer pageSize) {
        return createSuccessResponse("get paging of report by admin", reportService.getPagingReportByAdmin(postId,pageNo, pageSize));
    }

    @GetMapping("/admin/report_status")
    @Operation(summary = "get paging of report by admin")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "get paging of report by admin successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    private ResponseEntity<?> getAllReportByStatus(@RequestParam ReportStatus reportStatus,
                                                   @RequestParam Integer pageNo,
                                                   @RequestParam Long postId,
                                                   @RequestParam Integer pageSize) {
        return createSuccessResponse("get paging of report by admin by status", reportService.getPagingReportByAdmin(postId,pageNo, pageSize));
    }
    @PostMapping
    @Operation(summary = "Create a new report")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "Create a new report successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})

    public ResponseEntity<?> createNewReportByUser(@RequestBody ReportDTO reportDTO) {
        reportService.createNewReportByUser(reportDTO);
        return createSuccessResponse("Create a new report", HttpStatus.CREATED);
    }

}
