package com.example.backend.repositories;

import org.springframework.stereotype.Repository;

import com.example.backend.models.entities.Sizes;

@Repository
public interface SizesRepository extends BaseRepository<Sizes, Long> {
}
