package com.example.backend.repositories;

import com.example.backend.entities.Products;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsRepository extends BaseRepository<Products, Long>{
    
}
