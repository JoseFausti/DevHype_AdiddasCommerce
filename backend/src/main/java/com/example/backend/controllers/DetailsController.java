package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.entities.Details;
import com.example.backend.services.DetailsServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("/details")
public class DetailsController extends BaseControllerImpl<Details, DetailsServiceImpl> {
    
}
