package com.example.backend.models.entities;

import java.util.Collection;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.example.backend.models.enums.Role;
import org.springframework.security.core.userdetails.UserDetails;


@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Users extends Base implements UserDetails {

    @Column( name = "username")
    private String username;

    @Column( name = "name")
    private String name;

    @Column( name = "surname")
    private String surname;

    @Column( name = "email", unique = true)
    private String email;

    @Column( name = "password")
    private String password;

    @Column( name = "role")
    private Role role;

    @ManyToMany(cascade= {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
        name = "users_directions",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "directions_id")
        )
    private List<Directions> directions;

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }
}
