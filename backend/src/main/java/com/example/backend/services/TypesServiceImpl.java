package com.example.backend.services;

import com.example.backend.entities.Types;
import com.example.backend.repositories.BaseRepository;
import com.example.backend.repositories.TypesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TypesServiceImpl extends BaseServiceImpl<Types, Long> implements TypesService{

    @Autowired
    private TypesRepository typesRepository;

    public TypesServiceImpl(BaseRepository<Types, Long> baseRepository){
        super(baseRepository);
    }
}
