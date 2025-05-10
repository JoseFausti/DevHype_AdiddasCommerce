package com.example.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.entities.Purchase_orders;
import com.example.backend.repositories.BaseRepository;
import com.example.backend.repositories.Purchase_ordersRepository;

@Service
public class Purchase_ordersServiceImpl extends BaseServiceImpl<Purchase_orders, Long> implements Purchase_ordersService{

    @Autowired
    private Purchase_ordersRepository purchase_ordersRepository;

    public Purchase_ordersServiceImpl(BaseRepository<Purchase_orders, Long> baseRepository) {
        super(baseRepository);
    }
    
}
