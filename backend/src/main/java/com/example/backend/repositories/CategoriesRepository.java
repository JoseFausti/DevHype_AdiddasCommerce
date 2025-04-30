package com.example.backend.repositories;

import org.springframework.stereotype.Repository;

import com.example.backend.entities.Categories;

@Repository
public interface  CategoriesRepository extends BaseRepository<Categories, Long> {
    
}
