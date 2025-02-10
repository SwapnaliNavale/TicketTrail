package com.tickettrail.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration // Equivalent to bean config XML
@EnableWebSecurity // Enables annotation support for Spring Security
public class SecurityConfiguration {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomJWTAuthenticationFilter customJWTAuthenticationFilter;

    // ✅ Security filter chain with JWT authentication
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Disable CSRF (not needed for JWT-based authentication)
            .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Enable CORS
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // No sessions

            // ✅ Configure URL-based access
            .authorizeHttpRequests(requests ->
                requests
                    .requestMatchers("/users/**", "/buses/**").permitAll() // Public endpoints
                    .requestMatchers(HttpMethod.OPTIONS).permitAll() // Allow pre-flight requests
                    
                    // 🔹 Enforce ROLE_ADMIN for routes & schedules
                    .requestMatchers("/routes/**", "/schedules/**").hasAuthority("ROLE_ADMIN")

                    // 🔐 All other requests must be authenticated
                    .anyRequest().authenticated()
            )

            // ✅ Add JWT authentication filter before UsernamePasswordAuthenticationFilter
            .addFilterBefore(customJWTAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    // ✅ Supply AuthenticationManager as a Spring bean
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    // ✅ Global CORS configuration
    @Bean
    public UrlBasedCorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(List.of("http://localhost:5173")); // Frontend URL (React, Angular, etc.)
        config.setAllowedHeaders(List.of(HttpHeaders.AUTHORIZATION, HttpHeaders.CONTENT_TYPE));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    // ✅ Ensure the correct CorsFilter is used
    @Bean
    public CorsFilter corsFilter() {
        return new CorsFilter(corsConfigurationSource());
    }
}
