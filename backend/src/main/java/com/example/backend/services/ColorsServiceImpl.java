package com.example.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.entities.Colors;
import com.example.backend.repositories.BaseRepository;
import com.example.backend.repositories.ColorsRepository;

@Service
public class ColorsServiceImpl extends BaseServiceImpl<Colors, Long> implements ColorsService{
    
    @Autowired
    private ColorsRepository colorsRepository;
    
    public ColorsServiceImpl(BaseRepository<Colors, Long> baseRepository) {
        super(baseRepository);
    }
    
}
