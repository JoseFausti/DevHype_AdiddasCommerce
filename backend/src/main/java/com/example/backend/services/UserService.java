package com.example.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.backend.entities.Users;
import com.example.backend.repositories.BaseRepository;
import com.example.backend.repositories.UserRepository;

public class UserService extends BaseServiceImpl<Users, Long>{
    
    @Autowired // Crea una instancia de UserRepository y la inyecta en el constructor
    private UserRepository userRepository;

    public UserService(BaseRepository<Users, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public boolean delete(Long id) throws Exception {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public Users update(Users entity) throws Exception {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public Users save(Users entity) throws Exception {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public Users findById(Long id) throws Exception {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public List<Users> findAll() throws Exception {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    

}
