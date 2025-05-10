package com.example.backend.controllers;

import java.io.Serializable;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.backend.models.entities.Base;

public interface  BaseController <E extends Base, ID extends Serializable> {

    public ResponseEntity<?> getAll();
    public ResponseEntity<?> getById(@PathVariable ID id);
    public ResponseEntity<?> save(@RequestBody E entity);
    public ResponseEntity<?> update(@RequestBody E entity, @PathVariable ID id);
    public ResponseEntity<?> delete(@PathVariable ID id);
    
}
