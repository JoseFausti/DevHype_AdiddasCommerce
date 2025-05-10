package com.example.backend.controllers;

import com.example.backend.models.entities.Types;
import com.example.backend.services.TypesServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/types")
public class TypesController extends BaseControllerImpl<Types, TypesServiceImpl> {
}
