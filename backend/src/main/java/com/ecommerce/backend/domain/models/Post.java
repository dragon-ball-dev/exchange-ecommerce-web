package com.ecommerce.backend.domain.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "post")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Post extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private String title;

    private String image;

    @Column(name = "date")
    private LocalDateTime date;

    @Column(name = "item_status", nullable = false)
    private int itemStatus;

    @Column(name = "is_complete")
    private boolean isComplete;

    @Column(name = "like_count")
    private Long likeCount;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User userId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", nullable = false)
    private Category categoryId;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_post_like",
            joinColumns = @JoinColumn(name = "post_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private Set<User> likedPosts = new HashSet<>();


}
