package com.example.backend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "Purchase_orders")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Purchase_orders extends Base {
    
    @Column(name = "date")
    private String date;

    @Column(name= "total_price")
    private double totalPrice;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "status")
    private String status;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private Users user;

    @OneToMany(mappedBy = "purchase_order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Details> details;

}
