package com.ecommerce.backend.domain.payload.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FollowResponse {
    private UserResponse followerId;
    private UserResponse followingId;
}
