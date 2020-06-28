package com.afpa.service;

import java.util.List;

import com.afpa.security.model.User;
import com.afpa.security.model.UserDto;

public interface IUserService {

	List<UserDto> findAll();

	UserDto add(UserDto user);

	User save(User user);

	void delete(int id);

}
