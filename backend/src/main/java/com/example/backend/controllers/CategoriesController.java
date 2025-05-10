package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.entities.Categories;
import com.example.backend.services.CategoriesServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/categories")
public class CategoriesController extends BaseControllerImpl<Categories, CategoriesServiceImpl>{
    
}
