package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.entities.Users;
import com.example.backend.services.UserServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class UserController extends BaseControllerImpl<Users, UserServiceImpl> {
    

}
