package com.ecommerce.backend.repository;

import com.ecommerce.backend.domain.enums.UserRankConstant;
import com.ecommerce.backend.domain.models.UserRank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRankRepository extends JpaRepository<UserRank, Long> {
    Optional<UserRank> findByRankValue(String rankValue);

}
