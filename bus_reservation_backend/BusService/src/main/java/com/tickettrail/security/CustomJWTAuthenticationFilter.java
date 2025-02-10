package com.tickettrail.security;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class CustomJWTAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtils jwtUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        
        // 1. Check authorization header from incoming request
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        System.out.println("Authorization Header: " + authHeader);
        
        // 2. Check if it's not null and starts with "Bearer "
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            // 3. Extract JWT
            String jwt = authHeader.substring(7);
            System.out.println("Extracted JWT: " + jwt);

            try {
                // 4. Validate JWT and get claims
                Claims claims = jwtUtils.validateJwtToken(jwt);
                
                // 5. Extract authorities and check if user is an ADMIN
                Object authoritiesObj = claims.get("authorities");

                List<String> authorities;
                if (authoritiesObj instanceof String str) {
                    authorities = List.of(str); // Convert single string to List<String>
                } else {
                    authorities = (List<String>) authoritiesObj; // Extract normally if already a list
                }
                
                if (authorities == null || !authorities.contains("ROLE_ADMIN")) {
                    System.out.println("Access Denied: User is not an ADMIN");
                    response.sendError(HttpServletResponse.SC_FORBIDDEN, "Access Denied: Requires ROLE_ADMIN");
                    return; // Stop further processing
                }

                // 6. Get Authentication object and store it in Security Context
                Authentication authentication = jwtUtils.populateAuthenticationTokenFromJWT(jwt);
                if (authentication != null) {
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                    System.out.println("Authentication stored in Security Context: " + authentication.getAuthorities());
                } else {
                    System.out.println("JWT validation failed: Authentication is null!");
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid JWT Token");
                    return; // Stop further processing
                }

            } catch (Exception e) {
                System.out.println("JWT Validation Error: " + e.getMessage());
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid or Expired JWT Token");
                return; // Stop further processing
            }
        }

        // 7. Continue with the remaining filter chain
        filterChain.doFilter(request, response);
    }
}
