package com.afpa.controllers;

import java.security.Principal;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.afpa.security.model.User;
import com.afpa.security.model.UserDto;
import com.afpa.service.IUserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private IUserService userService;

	@GetMapping(value="/user")
    public List<UserDto> listUser(){
        return userService.findAll();
    }

    @PostMapping(value = "/user")
    public User create(@RequestBody User user){
        return userService.save(user);
    }

    @DeleteMapping(value = "/user/{id}")
    public String delete(@PathVariable(value = "id") int id){
        userService.delete(id);
        return "success";
    }
    
    @GetMapping(value="/current")
    public Principal currentUser(Principal user){
    	return user;
    }
    
}
