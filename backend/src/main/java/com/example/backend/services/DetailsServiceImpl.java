package com.example.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.entities.Details;
import com.example.backend.repositories.BaseRepository;
import com.example.backend.repositories.DetailsRepository;

@Service
public class DetailsServiceImpl extends BaseServiceImpl<Details, Long> implements DetailsService {
    
    @Autowired
    private DetailsRepository detailsRepository;

    public DetailsServiceImpl(BaseRepository<Details, Long> baseRepository) {
        super(baseRepository);
    }
}
