package com.example.backend.services.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.example.backend.models.auth.AuthResponse;
import com.example.backend.models.auth.LoginRequest;
import com.example.backend.models.auth.RegisterRequest;
import com.example.backend.models.enums.Role;
import com.example.backend.repositories.UserRepository;
import com.example.backend.models.entities.Users;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login (LoginRequest loginRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        Users user = userRepository.findByUsername(loginRequest.getUsername()).orElseThrow();
        return AuthResponse.builder().token(jwtService.getToken(user)).build();
    }

    public AuthResponse register (RegisterRequest registerRequest) {
        Users user = Users.builder()
            .username(registerRequest.getUsername())
            .name(registerRequest.getFirstName())
            .surname(registerRequest.getLastName())
            .email(registerRequest.getEmail())
            .password(registerRequest.getPassword())
            .role(Role.USER)
            .build();

        userRepository.save(user);
        return AuthResponse.builder().token(jwtService.getToken(user)).build();
    }
}
