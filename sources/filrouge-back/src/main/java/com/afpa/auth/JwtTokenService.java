package com.afpa.auth;

import io.jsonwebtoken.Claims;

import io.jsonwebtoken.Jws;

import org.springframework.security.core.Authentication;

import com.afpa.security.model.JwtTokens;
import com.afpa.security.model.UserDto;

public interface JwtTokenService {

    JwtTokens createTokens(Authentication authentication);
    String createToken(UserDto user);
    String createRefreshToken(UserDto user);

    JwtTokens refreshJwtToken(String token);
    Jws<Claims> validateJwtToken(String token);

}
