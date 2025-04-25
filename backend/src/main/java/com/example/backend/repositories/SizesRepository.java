package com.example.backend.repositories;

import com.example.backend.entities.Sizes;
import org.springframework.stereotype.Repository;

@Repository
public interface SizesRepository extends BaseRepository<Sizes, Long> {
}
