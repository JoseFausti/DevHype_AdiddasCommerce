package com.example.backend.models.entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "colors")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Colors extends Base{

    @Column(name = "color_img")
    private String color;
    
    @ManyToMany(mappedBy = "colors")
    private List<Products> products;

}
