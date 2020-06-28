package com.afpa.security.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.time.LocalDate;
import java.util.Collection;

public class UserDto extends User {

	private static final long serialVersionUID = 1L;
	
	private final int id;
    private final String email;
    private final LocalDate lastPasswordResetDate;
    private final String userSecret;

    public UserDto(int id, String username, String password, String email, Collection<? extends GrantedAuthority> authorities, boolean enabled, LocalDate lastPasswordResetDate, String userSecret) {
        super(username, password, enabled, true, true, true, authorities);
        this.id = id;
        this.email = email;
        this.lastPasswordResetDate = lastPasswordResetDate;
        this.userSecret = userSecret;
    }

    @JsonIgnore
    public int getId() {
        return id;
    }

    @Override
    public String getUsername() {
        return super.getUsername();
    }

    public String getEmail() {
        return email;
    }

    public LocalDate getLastPasswordResetDate() {
        return lastPasswordResetDate;
    }

    @JsonIgnore
    @Override
    public String getPassword() {
        return super.getPassword();
    }

    @JsonIgnore
    @Override
    public boolean isEnabled() {
        return super.isEnabled();
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return super.isAccountNonExpired();
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return super.isAccountNonLocked();
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return super.isCredentialsNonExpired();
    }

    @JsonIgnore
    public String getUserSecret() {
        return userSecret;
    }
}
