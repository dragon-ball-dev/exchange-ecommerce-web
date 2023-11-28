package com.ecommerce.backend.services;

import com.ecommerce.backend.domain.dto.CategoryDTO;
import org.springframework.data.domain.Page;

public interface CategoryService {
    Page<CategoryDTO> getPagingBrand(Integer pageNo, Integer pageSize);

    void createNewCategory(CategoryDTO categoryDTO);

    void updateCategory(Long id, CategoryDTO categoryDTO);

    void deleteCategory(Long id);
}
