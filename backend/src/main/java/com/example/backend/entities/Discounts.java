package com.example.backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "discounts")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Discounts extends Base {

    @Column(name = "initial_date")
    private String initialDate;

    @Column(name = "final_date")
    private String finalDate;

    @Column(name = "percentage")
    private double percentage;
}
