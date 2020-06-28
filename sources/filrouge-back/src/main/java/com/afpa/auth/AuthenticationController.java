package com.afpa.auth;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.afpa.security.model.AuthenticationRequest;
import com.afpa.security.model.JwtTokens;
import com.afpa.security.model.RefreshRequest;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenService jwtTokenService;

    @PostMapping(value = "/auth", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> authenticate(@RequestBody AuthenticationRequest authenticationRequest) {

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(authenticationRequest.username, 
        		authenticationRequest.password
        		
        );
        Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        if(authentication != null && authentication.isAuthenticated()) {
            JwtTokens tokens = jwtTokenService.createTokens(authentication);
            return ResponseEntity.ok().body(tokens);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(HttpStatus.UNAUTHORIZED.getReasonPhrase());
    }

    @PostMapping(value = "/auth/refresh", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> refreshToken(@RequestBody RefreshRequest refreshRequest) {
        try {
            JwtTokens tokens = jwtTokenService.refreshJwtToken(refreshRequest.refreshToken);
            return ResponseEntity.ok().body(tokens);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(HttpStatus.UNAUTHORIZED.getReasonPhrase());
        }
    }

}
