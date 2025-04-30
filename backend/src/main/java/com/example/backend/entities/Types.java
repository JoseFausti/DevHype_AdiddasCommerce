package com.example.backend.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "types")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Types extends Base {

    @Column(name = "name")
    private String name;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "category_id")
    private Categories category;
}
