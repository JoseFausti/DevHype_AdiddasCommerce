package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.entities.Purchase_orders;
import com.example.backend.services.Purchase_ordersServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/purchase_orders")
public class Purchase_ordersController extends BaseControllerImpl<Purchase_orders, Purchase_ordersServiceImpl> {
    
}
