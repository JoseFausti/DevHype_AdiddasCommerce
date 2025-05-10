package com.example.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.entities.Products;
import com.example.backend.repositories.BaseRepository;
import com.example.backend.repositories.ProductsRepository;

@Service
public class ProductsServiceImpl extends BaseServiceImpl<Products, Long> implements ProductsService {
    
    @Autowired
    private ProductsRepository productsRepository;

    public ProductsServiceImpl(BaseRepository<Products, Long> baseRepository) {
        super(baseRepository);
    }
}
