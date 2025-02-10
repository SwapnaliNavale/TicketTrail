package com.tickettrail.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsServiceImpl implements UserDetailsService {
	@Autowired
    private JwtUtils jwtUtils;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // This method is only used when authentication happens by username (not JWT).
        throw new UnsupportedOperationException("Direct username authentication is not supported.");
    }

    // ✅ Extract user details from JWT
    public UserDetails loadUserByToken(String token) {
        Claims claims = jwtUtils.validateJwtToken(token);
        if (claims == null) {
            throw new RuntimeException("Invalid JWT Token");
        }

        String email = jwtUtils.getUserNameFromJwtToken(claims);
        List<GrantedAuthority> authorities = jwtUtils.getAuthoritiesFromClaims(claims);

        // ✅ Return a dummy UserDetails object (No DB Lookup Required)
        return new User(email, "", authorities); // Empty password since JWT is stateless
    }
}
