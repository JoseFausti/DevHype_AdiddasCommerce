package com.example.backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
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

    @Column(name = "category")
    private String category;

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

}
