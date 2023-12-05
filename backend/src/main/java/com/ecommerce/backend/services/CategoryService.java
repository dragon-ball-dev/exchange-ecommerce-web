package com.ecommerce.backend.services;

import com.ecommerce.backend.domain.dto.CategoryDTO;
import com.ecommerce.backend.domain.models.Category;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface CategoryService {
    Page<CategoryDTO> getPagingBrand(Integer pageNo, Integer pageSize);

    Category getCategoryByID(Long id);

    void createNewCategory(CategoryDTO categoryDTO);

    void updateCategory(Long id, CategoryDTO categoryDTO);

    void deleteCategory(Long id);
}
