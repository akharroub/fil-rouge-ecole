package com.afpa.auth;

import io.jsonwebtoken.Claims;

import io.jsonwebtoken.Jws;

import org.springframework.security.core.Authentication;

import com.afpa.security.model.AuthenticationRequest;

public interface AuthenticationService {

	Authentication getAuthentication(Jws<Claims> request);
	Authentication authenticate(AuthenticationRequest authenticationRequest);

}
