package com.example.backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Purchase_orders")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Purchase_orders extends Base {
    
    @Column(name = "date")
    private String date;

    @Column(name= "total_price")
    private double totalPrice;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "status")
    private String status;
}
