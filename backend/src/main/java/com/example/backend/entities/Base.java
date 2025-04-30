package com.example.backend.entities;

import java.io.Serializable;
import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@MappedSuperclass
@Data  //Getter and Setter
public class Base implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "deleted", columnDefinition = "boolean default false")
    private boolean deleted;
    
}
