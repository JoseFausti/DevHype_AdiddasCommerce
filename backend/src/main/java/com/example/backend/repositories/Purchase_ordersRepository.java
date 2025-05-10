package com.example.backend.repositories;

import org.springframework.stereotype.Repository;

import com.example.backend.models.entities.Purchase_orders;

@Repository
public interface Purchase_ordersRepository extends BaseRepository<Purchase_orders, Long> {
    
}
