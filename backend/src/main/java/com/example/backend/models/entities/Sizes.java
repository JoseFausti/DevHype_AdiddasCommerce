package com.example.backend.models.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "sizes")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Sizes extends Base{

    @Column(name = "size")
    private double size;

    @ManyToMany(mappedBy = "sizes")
    private List<Products> products;
}
