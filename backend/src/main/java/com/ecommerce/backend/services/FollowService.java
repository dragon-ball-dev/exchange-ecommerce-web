package com.ecommerce.backend.services;

import com.ecommerce.backend.domain.payload.request.FollowRequest;
import com.ecommerce.backend.domain.payload.response.FollowResponse;
import com.ecommerce.backend.domain.payload.response.MessageResponse;
import org.springframework.data.domain.Page;

public interface FollowService {

    MessageResponse addFollow(FollowRequest followRequest);

    Page<FollowResponse> getAllFollowOfCustomer(Integer pageNo, Integer pageSize);
}
