package com.example.backend.services;

import java.io.Serializable;
import java.util.List;

import com.example.backend.entities.Base;
import com.example.backend.repositories.BaseRepository;

public abstract class BaseServiceImpl<E extends Base, ID extends Serializable> implements BaseService<E, ID> {
    
    protected BaseRepository<E, ID> baseRepository;    

    public BaseServiceImpl(BaseRepository<E, ID> baseRepository){
        this.baseRepository = baseRepository;
    }

    @Override
    public boolean delete(ID id) throws Exception{
        try {
            result = baseRepository.delete(id);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public E update(E entity) throws Exception {
        try {
            
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public E save(E entity) throws Exception {
        try {
            
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public E findById(ID id) throws Exception {
        try {
            
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public List<E> findAll() throws Exception {
        try {
            
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public String toString() {
        return super.toString();
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        return super.equals(obj);
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }


}
