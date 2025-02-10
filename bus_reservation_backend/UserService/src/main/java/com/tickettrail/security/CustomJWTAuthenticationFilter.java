package com.tickettrail.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
/*
 * OncePerRequestFilter - Base class which ensures execution once per request
 */
@Component
public class CustomJWTAuthenticationFilter extends OncePerRequestFilter {
	@Autowired
	private JwtUtils jwtUtils;

	@Override
	protected void doFilterInternal(HttpServletRequest request,
			HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// 1. Check authorization header from incoming request
		String authHeader=request.getHeader("Authorization");
		 System.out.println("Authorization Header: " + authHeader);
		//2. Check if its not null n starts with - Bearer
		if(authHeader != null && authHeader.startsWith("Bearer ")) {
			//3. extract JWT
			String jwt=authHeader.substring(7);
			System.out.println("Extracted JWT: " + jwt);
			//4. Simply invoke JWT utils 's method for JWT validation n getting 
			//Authentication object.
			Authentication authentication = jwtUtils.populateAuthenticationTokenFromJWT(jwt);
			//5. upon successful verification , store auth object under spring sec ctx holder
			if (authentication != null) {
                // 5. Store authentication object in Security Context
                SecurityContextHolder.getContext().setAuthentication(authentication);
                System.out.println("Saved authentication under Spring Security context: " + authentication.getAuthorities());
            } else {
                System.out.println("JWT validation failed: Authentication is null!");
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid JWT Token");
                return;  // Stop further processing
            }
//			SecurityContextHolder.getContext().setAuthentication(authentication);
//			System.out.println("saved auth details under spring sec ctx!!!!");
		}
		//continue with remaining filter chain.
		filterChain.doFilter(request, response);
		

	}

}
