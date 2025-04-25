package com.example.backend.repositories;

import org.springframework.stereotype.Repository;

import com.example.backend.entities.Users;

@Repository
public interface UserRepository extends BaseRepository<Users, Long> {
    // Aqui el autowired implementaria los metodos automaticamente..
    // public List<Users> findAll();
    // public Users findById(Long id);
    // public Users save(Users entity);
    // public Users update(Users entity, Long id);
    // public boolean delete(Long id);
}
