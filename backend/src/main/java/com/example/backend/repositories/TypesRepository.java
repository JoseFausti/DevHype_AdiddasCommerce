package com.example.backend.repositories;

import org.springframework.stereotype.Repository;

import com.example.backend.models.entities.Types;

@Repository
public interface TypesRepository extends BaseRepository<Types, Long> {
}
