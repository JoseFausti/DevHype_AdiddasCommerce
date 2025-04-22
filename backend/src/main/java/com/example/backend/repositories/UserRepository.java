package com.example.backend.repositories;

import org.springframework.stereotype.Repository;

import com.example.backend.entities.Users;

@Repository
public interface UserRepository extends BaseRepository<Users, Long> {
     
}
