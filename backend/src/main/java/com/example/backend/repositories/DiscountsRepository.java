package com.example.backend.repositories;

import org.springframework.stereotype.Repository;

import com.example.backend.models.entities.Discounts;

@Repository
public interface DiscountsRepository extends BaseRepository<Discounts, Long> {
    
}
