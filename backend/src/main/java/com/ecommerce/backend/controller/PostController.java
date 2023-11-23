package com.ecommerce.backend.controller;

import com.ecommerce.backend.config.Constant;
import com.ecommerce.backend.controller.base.BaseController;
import com.ecommerce.backend.controller.base.message.ExtendedMessage;
import com.ecommerce.backend.domain.dto.PostDTO;
import com.ecommerce.backend.domain.enums.FilterSortUser;
import com.ecommerce.backend.services.PostService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class PostController extends BaseController {
    private final PostService postService;

    @GetMapping("/post")
    @Operation(summary = "get paging of post")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "Create a new post successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    private ResponseEntity<?> getAllPost(@RequestParam Integer pageNo,
                                         @RequestParam Integer pageSize){
        return ResponseEntity.ok(postService.getPagingPost(pageNo, pageSize));
    }

    @GetMapping("/post/filter")
    @Operation(summary = "filter sort for post")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "Create a new post successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    private ResponseEntity<?> getPostFilter(
            @RequestParam FilterSortUser filterSortUser,
            @RequestParam Integer sortBy,
            @RequestParam Long category ,
            @RequestParam Integer pageNo,
            @RequestParam Integer pageSize,
            @RequestParam Long userId){
        return createSuccessResponse("Create a new car",postService.getPagingPostFilter(category, sortBy,filterSortUser, pageNo, pageSize,userId ));
    }
    @PostMapping("/post")
    @Operation(summary = "create a new post")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "Create a new post successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    private ResponseEntity<?> createPost(
            @RequestBody PostDTO postDTO
            ){
        postService.createNewPostByUser(postDTO);
       return createSuccessResponse("Create a new post", HttpStatus.CREATED);
    }

    @PutMapping("/post/{id}")
    @Operation(summary = "update post")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "Create a new post successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    private ResponseEntity<?> updatePost(
            @PathVariable Long id,
            @RequestBody PostDTO postDTO
    ){
        postService.updatePost(id,postDTO);
        return createSuccessResponse("Create a new post", HttpStatus.CREATED);
    }
}
