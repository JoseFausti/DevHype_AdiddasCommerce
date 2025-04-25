package com.example.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.entities.Discounts;
import com.example.backend.repositories.BaseRepository;
import com.example.backend.repositories.DiscountsRepository;

@Service
public class DiscountsServiceImpl extends BaseServiceImpl<Discounts, Long> implements DiscountsService {

    @Autowired
    private DiscountsRepository discountsRepository;

    public DiscountsServiceImpl(BaseRepository<Discounts, Long> baseRepository) {
        super(baseRepository);
    }
    
}
