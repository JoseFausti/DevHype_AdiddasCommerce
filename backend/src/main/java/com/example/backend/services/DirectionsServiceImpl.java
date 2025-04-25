package com.example.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.entities.Directions;
import com.example.backend.repositories.BaseRepository;
import com.example.backend.repositories.DirectionsRepository;

@Service
public class DirectionsServiceImpl extends BaseServiceImpl<Directions, Long> implements DirectionsService {
    
    @Autowired
    private DirectionsRepository directionsRepository;

    public DirectionsServiceImpl(BaseRepository<Directions, Long> baseRepository) {
        super(baseRepository);
    }
}
