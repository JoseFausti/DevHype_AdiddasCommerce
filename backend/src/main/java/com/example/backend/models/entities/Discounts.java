package com.example.backend.models.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "discounts")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Discounts extends Base {

    @Column(name = "initial_date")
    private String initialDate;

    @Column(name = "final_date")
    private String finalDate;

    @Column(name = "percentage")
    private double percentage;

    @ManyToMany(mappedBy = "discounts")
    private List<Products> products;
}