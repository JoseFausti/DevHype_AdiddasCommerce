package com.example.backend.services;

import com.example.backend.entities.Sizes;
import com.example.backend.entities.Users;
import com.example.backend.repositories.BaseRepository;
import com.example.backend.repositories.SizesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SizesServiceImpl extends BaseServiceImpl<Sizes, Long> implements SizesService{
    @Autowired
    private SizesRepository sizesRepository;

    public SizesServiceImpl(BaseRepository<Sizes, Long> baseRepository) {
        super(baseRepository);
    }
}
