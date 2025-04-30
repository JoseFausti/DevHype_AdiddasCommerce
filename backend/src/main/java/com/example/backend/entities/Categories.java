package com.example.backend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "categories")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Categories extends Base {
    
    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "category")
    private List<Products> products;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Types> types;
}
