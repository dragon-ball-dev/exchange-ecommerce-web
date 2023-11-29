package com.ecommerce.backend.services.impl;

import com.ecommerce.backend.domain.dto.CategoryDTO;
import com.ecommerce.backend.domain.models.Category;
import com.ecommerce.backend.mapper.CommonMapper;
import com.ecommerce.backend.repository.CategoryRepository;
import com.ecommerce.backend.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryServiceImp implements CategoryService {
    private final CategoryRepository categoryRepository;

    private final CommonMapper mapper;


    @Override
    public Page<CategoryDTO> getPagingBrand(Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        List<CategoryDTO> list = mapper.convertToResponseList(categoryRepository.findAll(), CategoryDTO.class);
        return new PageImpl<>(list, pageable, list.size());
    }

    @Override
    public void createNewCategory(CategoryDTO categoryDTO) {
        Category category = mapper.convertToEntity(categoryDTO, Category.class);
        category.setCreatedAt(LocalDateTime.now());
        categoryRepository.save(category);
    }

    @Override
    public void updateCategory(Long id, CategoryDTO categoryDTO) {
        if (!Objects.nonNull(categoryRepository.findByName(categoryDTO.getName()))) {
            throw new IllegalArgumentException("Category name have existed!");
        }
        Category category = categoryRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Category is not exist"));
        category.setName(categoryDTO.getName());
        category.setUpdatedAt(LocalDateTime.now());
        categoryRepository.save(category);
    }

    @Override
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
}
