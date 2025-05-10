package com.example.backend.controllers;

import com.example.backend.models.entities.Sizes;
import com.example.backend.services.SizesServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/sizes")
public class SizesController extends BaseControllerImpl<Sizes, SizesServiceImpl>{
}
