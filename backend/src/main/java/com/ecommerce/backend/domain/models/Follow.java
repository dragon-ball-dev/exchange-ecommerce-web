package com.ecommerce.backend.domain.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "follow")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Follow implements Serializable {
    @Id
    @ManyToOne
    @JoinColumn(name = "follower_id")
    private User followerId;
    // người theo dõi
    @Id
    @ManyToOne
    @JoinColumn(name = "following_id")
    private User followingId;
    // người được theo dõi
    private static final long serialVersionUID = 1L;
}
