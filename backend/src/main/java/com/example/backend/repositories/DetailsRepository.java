package com.example.backend.repositories;

import org.springframework.stereotype.Repository;

import com.example.backend.models.entities.Details;

@Repository
public interface DetailsRepository extends BaseRepository<Details, Long> {
    
}
