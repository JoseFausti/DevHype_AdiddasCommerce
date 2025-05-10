package com.example.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.entities.Categories;
import com.example.backend.repositories.BaseRepository;
import com.example.backend.repositories.CategoriesRepository;

@Service
public class CategoriesServiceImpl extends BaseServiceImpl<Categories, Long> implements CategoriesService{

    @Autowired
    private CategoriesRepository categoriesRepository;

    public CategoriesServiceImpl(BaseRepository<Categories, Long> baseRepository) {
        super(baseRepository);
    }
}
