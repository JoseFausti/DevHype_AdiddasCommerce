package com.example.backend.repositories;

import org.springframework.stereotype.Repository;

import com.example.backend.entities.Base;

@Repository
public interface ProductsRepository extends BaseRepository<Base, Long>{
    
}
