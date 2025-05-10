package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.entities.Colors;
import com.example.backend.services.ColorsServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("/colors")
public class ColorsController extends BaseControllerImpl<Colors, ColorsServiceImpl>{
    
}
