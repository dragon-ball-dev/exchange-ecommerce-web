package com.ecommerce.backend.services.impl;

import com.ecommerce.backend.domain.models.Follow;
import com.ecommerce.backend.domain.models.User;
import com.ecommerce.backend.domain.payload.request.FollowRequest;
import com.ecommerce.backend.domain.payload.response.FollowResponse;
import com.ecommerce.backend.domain.payload.response.MessageResponse;
import com.ecommerce.backend.mapper.CommonMapper;
import com.ecommerce.backend.repository.FollowRepository;
import com.ecommerce.backend.repository.UserRepository;
import com.ecommerce.backend.services.BaseService;
import com.ecommerce.backend.services.FollowService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FollowServiceImpl extends BaseService implements FollowService {

    private final FollowRepository followRepository;
    private final UserRepository userRepository;
    private final CommonMapper mapper;

    @Override
    public MessageResponse addFollow(FollowRequest followRequest) {
        User follower = userRepository.findById(getUserId()).orElseThrow(()-> new IllegalArgumentException("Tài khoảng không tồn tại"));
        User following = userRepository.findById(followRequest.getFollowingId()).orElseThrow(() -> new IllegalArgumentException("Tài khoảng không tồn tại"));
        Optional<Follow> followOptional = followRepository.findByFollowerAndFollowing(follower, following);

        if (followOptional.isPresent()) {
            followRepository.delete(followOptional.get());
            return MessageResponse.builder().message("Đã hủy theo dõi").build();
        }
        Follow follow = new Follow();
        follow.setFollower(follower);
        follow.setFollowing(following);
        followRepository.save(follow);
        return MessageResponse.builder().message("Đã theo dõi.").build();
    }

    @Override
    public Page<FollowResponse> getAllFollowOfCustomer(Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        return mapper.convertToResponsePage(followRepository.getPageFollow(getUserId(),pageable),FollowResponse.class, pageable);
    }
}
