package com.example.backend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "products")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Products extends Base{

    @Column(name = "name")
    private String name;

    @Column(name = "image", nullable = true)
    private String image;

    @Column(name = "stock" , nullable = false)
    private int stock;

    @Column(name = "discount")
    private double discount;

    @Column(name = "final_price")
    private double finalPrice;

    @Column(name = "gender")
    private String gender;

    @Column(name = "cuantity")
    private int cuantity;

    @Column(name = "price")
    private double price;

    @Column(name = "description")
    private String description;
    
    @Column(name = "size")
    private String size;

    @Column(name = "color")
    private String color;
    
    @Column(name = "brand")
    private String brand;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Details> details;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "category_id")
    private Categories category;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "product_size",
            joinColumns = @JoinColumn(name = "id_product"),
            inverseJoinColumns = @JoinColumn(name = "id_size")
    )
    private List<Sizes> sizes;

    @ManyToMany
    @JoinTable(
            name = "product_discount",
            joinColumns = @JoinColumn(name = "id_product"),
            inverseJoinColumns = @JoinColumn(name = "id_discount")
    )
    private List<Discounts> discounts;

}
