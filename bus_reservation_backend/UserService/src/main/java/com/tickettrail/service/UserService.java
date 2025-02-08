package com.tickettrail.service;

import com.tickettrail.dto.ApiResponse;
import com.tickettrail.dto.AuthRequest;
import com.tickettrail.dto.AuthResponse;
import com.tickettrail.dto.UserDTO;

import jakarta.validation.Valid;

public interface UserService {
//	ApiResponse registerNewUser(UserDTO dto);
	//user signin
	ApiResponse<AuthResponse> authenticateUser(AuthRequest dto);
		//sign up 
		ApiResponse<String> signUp(@Valid UserDTO dto);
		UserDTO getUserDetails(Long userId);
		void signOut(String token);
		
}
