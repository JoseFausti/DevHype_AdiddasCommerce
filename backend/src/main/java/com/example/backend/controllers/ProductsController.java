package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.entities.Products;
import com.example.backend.services.ProductsServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/products")
public class ProductsController extends BaseControllerImpl<Products, ProductsServiceImpl>{
    
}
