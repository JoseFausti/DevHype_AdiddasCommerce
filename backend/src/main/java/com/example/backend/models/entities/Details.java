package com.example.backend.models.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "details")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class Details extends Base {
    
    // Se relaciona con la tabla products y purchase_orders 

    @Column(name="cuantity")
    private int cuantity;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "product_id")
    private Products product;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "purchase_order_id")
    private Purchase_orders purchase_order;
}
