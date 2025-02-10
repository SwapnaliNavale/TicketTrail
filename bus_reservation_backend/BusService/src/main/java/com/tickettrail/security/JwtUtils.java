package com.tickettrail.security;

import java.security.Key;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtUtils {

    @Value("${spring.security.jwt.secret.key}")
    private String jwtSecret;

    @Value("${spring.security.jwt.exp.time}")
    private int jwtExpirationMs;

    private Key key;

    @PostConstruct
    public void init() {
        key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    // Method to generate JWT token
    public String generateJwtToken(Authentication authentication) {
        log.info("Generating JWT token for: " + authentication);
        String authorities = getAuthoritiesInString(authentication.getAuthorities());

        return Jwts.builder()
                .setSubject(authentication.getName())
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .claim("authorities", authorities) // Store authorities as a String
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }

    // Method to validate JWT token
    public Claims validateJwtToken(String jwtToken) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(jwtToken)
                    .getBody();
        } catch (Exception e) {
            log.error("JWT validation failed: " + e.getMessage());
            return null; // or throw a custom exception
        }
    }

    // Convert authorities to a comma-separated String
    private String getAuthoritiesInString(Collection<? extends GrantedAuthority> authorities) {
        return authorities.stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));
    }

    // Populate Authentication object from JWT
    public Authentication populateAuthenticationTokenFromJWT(String jwt) {
        Claims claims = validateJwtToken(jwt);
        if (claims == null) {
            return null; // or throw an exception
        }

        String username = getUserNameFromJwtToken(claims);
        List<GrantedAuthority> authorities = getAuthoritiesFromClaims(claims);

        return new UsernamePasswordAuthenticationToken(username, null, authorities);
    }

    // Get username from claims
    public String getUserNameFromJwtToken(Claims claims) {
        return claims.getSubject();
    }

 // Get authorities from claims
//    public List<GrantedAuthority> getAuthoritiesFromClaims(Claims claims) {
//        // Retrieve the authorities claim as a String
//        String authString = claims.get("authorities", String.class);
//        
//        // Convert the comma-separated String to a List of GrantedAuthority
//        return AuthorityUtils.commaSeparatedStringToAuthorityList(authString);
//    }
    public List<GrantedAuthority> getAuthoritiesFromClaims(Claims claims) {
        // Retrieve the authorities claim as a String
        String authString = claims.get("authorities", String.class);
        log.info("Extracted Authorities from JWT: " + authString); // Debugging line

        if (authString == null || authString.isEmpty()) {
            log.error("No authorities found in JWT!");
            return List.of(); // Return empty list if authorities are missing
        }

        // Convert comma-separated string to List<GrantedAuthority>
        return AuthorityUtils.commaSeparatedStringToAuthorityList(authString);
    }
}