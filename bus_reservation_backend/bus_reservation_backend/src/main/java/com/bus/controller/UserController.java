package com.bus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bus.dto.AuthRequest;
import com.bus.dto.AuthResponse;
import com.bus.dto.UserDTO;
import com.bus.security.JwtUtils;
import com.bus.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {
	//depcy
	@Autowired
	private UserService userService;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtils jwtUtils;
	/*
	 * Desc - user sign up
	 * URL - http://host:port/users/signup
	 * Method - POST
	 * Payload - user req dto
	 * Success resp - Api resp
	 * err - Api resp err mesg
	 */
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody @Valid UserDTO dto) {
		System.out.println("register user "+dto);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(userService.registerNewUser(dto));
		
	}
	/*
	 * Desc - user sign in
	 * URL - http://host:port/users/signin
	 * Method - POST
	 * Payload - auth req dto
	 * Success resp -Auth Resp DTO - mesg + JWT
	 * err - Api resp err mesg
	 */
	@PostMapping("/signin")
	public ResponseEntity<?> userSignIn(@RequestBody @Valid
			AuthRequest dto) {
		System.out.println("in sign in "+dto);
		//1. Create auth token using suser supplied em n pwd
		UsernamePasswordAuthenticationToken 
		authenticationToken = new UsernamePasswordAuthenticationToken
		(dto.getEmail(),dto.getPassword());
		System.out.println(authenticationToken.isAuthenticated());//f
		//2. invoke Spring sec supplied auth mgr's authenticate method
		Authentication authToken = 
				authenticationManager.authenticate(authenticationToken);
		//=> auth success
		System.out.println(authToken.isAuthenticated());//t
		//3 . Send auth respone to the client containing JWTS
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(new AuthResponse("Successful Auth !",
						jwtUtils.generateJwtToken(authToken)));		
		
	}
	

}
