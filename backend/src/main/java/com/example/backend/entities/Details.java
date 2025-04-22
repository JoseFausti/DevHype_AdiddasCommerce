package com.example.backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "details")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Details extends Base {
    
    // Se relaciona con la tabla products y purchase_orders 

    @Column(name="cuantity")
    private int cuantity;
}
