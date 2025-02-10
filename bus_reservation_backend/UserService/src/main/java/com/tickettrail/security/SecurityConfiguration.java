package com.tickettrail.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration // Equivalent to bean config XML
@EnableWebSecurity // Enables annotation support for Spring Security
public class SecurityConfiguration {
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private CustomJWTAuthenticationFilter customJWTAuthenticationFilter;
	
	// Configure the bean to customize spring security filter chain
		@Bean
		public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception
		{
			//1. Disable CSRF filter
			http.csrf(customizer -> customizer.disable())
			//2. configure URL based access
	        .authorizeHttpRequests
	        (request -> 
	        request.requestMatchers("/users/**","/buses/**").permitAll() 
	        //required explicitly for JS clients (eg React app - to permit pre flight requests)
	        .requestMatchers(HttpMethod.OPTIONS).permitAll()
	        	
	       .requestMatchers("/routes/**","/schedules/**")
	       .hasAuthority("ROLE_ADMIN")        		
	        .anyRequest().authenticated())  
	  //      .httpBasic(Customizer.withDefaults()) - replacing it by custom JWT filter
	        .sessionManagement(session 
	        		-> session.sessionCreationPolicy(
	        				SessionCreationPolicy.STATELESS));
			//adding custom JWT fi;lter before any auth filter
			http.addFilterBefore(customJWTAuthenticationFilter, 
					UsernamePasswordAuthenticationFilter.class);
	        return http.build();
		}
		//to supply Auth Mgr , configure it as a spring bean
		@Bean
		public AuthenticationManager authenticationManager
		(AuthenticationConfiguration config) throws Exception
		{
			return config.getAuthenticationManager();
		}
//
//    
//  
//
//    // ✅ Security filter chain with CORS enabled
//    @Bean
//    public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception {
//        http
//            
//            .csrf(csrf -> csrf.disable()) // Disable CSRF (optional for APIs)
//            
//            // Configure URL-based access
//            .authorizeHttpRequests(requests ->
//                requests
//                    .requestMatchers("/users/signup", "/users/signin").permitAll() // Public routes
//                    .requestMatchers(HttpMethod.OPTIONS).permitAll() // Allow pre-flight requests
//                    .requestMatchers("/routes/", "/schedules/").hasRole("ADMIN")        
//                    .anyRequest().authenticated()
//            )
//            
//            .sessionManagement(session ->
//                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS) // No sessions (JWT)
//            )
//            
//            // Adding custom JWT filter before UsernamePasswordAuthenticationFilter
//            .addFilterBefore(customJWTAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
//
//        return http.build();
//    }
//
//    // ✅ Supply AuthenticationManager as a Spring bean
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
//        return config.getAuthenticationManager();
//    }

//    // ✅ Global CORS configuration
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowCredentials(true);
//        config.setAllowedOrigins(List.of("http://localhost:5173")); // React app URL
//        config.setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type"));
//        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", config);
//        return source;
//    }
//
//    // ✅ Ensure the correct CorsFilter is used
//    @Bean
//    public CorsFilter corsFilter() {
//        return new CorsFilter(corsConfigurationSource());
//    }
}
