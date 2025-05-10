package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.entities.Discounts;
import com.example.backend.services.DiscountsServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/discounts")
public class DiscountsController extends BaseControllerImpl<Discounts, DiscountsServiceImpl> {
    
}
