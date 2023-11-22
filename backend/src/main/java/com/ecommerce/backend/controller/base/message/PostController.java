package com.ecommerce.backend.controller.base.message;

import com.ecommerce.backend.controller.base.BaseController;
import com.ecommerce.backend.domain.dto.PostDTO;
import com.ecommerce.backend.domain.enums.FilterSortUser;
import com.ecommerce.backend.services.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class PostController extends BaseController {
    private final PostService postService;

    @GetMapping("/post")
    private ResponseEntity<?> getAllPost(@RequestParam Integer pageNo,
                                         @RequestParam Integer pageSize){
        return ResponseEntity.ok(postService.getPagingPost(pageNo, pageSize));
    }

    @GetMapping("/post/filter")
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
    private ResponseEntity<?> createPost(
            @RequestBody PostDTO postDTO
            ){
        postService.createNewPostByUser(postDTO);
       return createSuccessResponse("Create a new car", HttpStatus.CREATED);
    }
}
