package com.afpa.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.afpa.security.model.User;

@Repository
public interface IDaoUser extends CrudRepository<User, Integer> {

	User findByUsername(String userId);

}
