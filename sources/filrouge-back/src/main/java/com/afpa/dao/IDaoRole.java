package com.afpa.dao;

import org.springframework.data.repository.CrudRepository;

import com.afpa.security.model.Role;

public interface IDaoRole extends CrudRepository<Role, Integer> {

}
