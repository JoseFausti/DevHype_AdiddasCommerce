package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.entities.Directions;
import com.example.backend.services.DirectionsServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/directions")
public class DirectionsController extends BaseControllerImpl<Directions, DirectionsServiceImpl> {
    
}
