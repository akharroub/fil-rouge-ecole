package com.afpa.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.afpa.dao.IDaoUser;
import com.afpa.security.model.User;
import com.afpa.security.model.UserDto;

@Service
public class UserImp implements UserDetailsService, IUserService {

	@Autowired
	IDaoUser userDao;

	@Override
	public List<UserDto> findAll() {

		return null;
	}

	@Override
	public UserDto add(UserDto user) {

		return null;
	}

	@Override
	public User save(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub

	}

	@Override
	public UserDto loadUserByUsername(String userId) throws UsernameNotFoundException {
		User user = userDao.findByUsername(userId);
		Collection<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority(user.getRole().getLabel()));
		return new UserDto(user.getId(), user.getUsername(), user.getPassword(), "mail@mail.com",
				authorities, true, LocalDate.now(), "doubleVerification");
	}

	private List<SimpleGrantedAuthority> getAuthority(User user) {
		return Arrays.asList(new SimpleGrantedAuthority(user.getRole().getLabel()));
	}


}
