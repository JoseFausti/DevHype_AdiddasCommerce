package com.example.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.entities.Users;
import com.example.backend.repositories.BaseRepository;
import com.example.backend.repositories.UserRepository;

@Service
public class UserServiceImpl extends BaseServiceImpl<Users, Long> implements UserService {
    
    @Autowired // Crea la implementacion en UserRepository automaticamente de los metodos
    private UserRepository userRepository;

    public UserServiceImpl(BaseRepository<Users, Long> baseRepository) {
        super(baseRepository);
    }

}
