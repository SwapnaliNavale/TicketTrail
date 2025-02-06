package com.tickettrail.service;

import com.tickettrail.dto.AuthRequest;
import com.tickettrail.dto.UserDTO;

import jakarta.validation.Valid;

public interface UserService {
//	ApiResponse registerNewUser(UserDTO dto);
	//user signin
		UserDTO authenticateUser(AuthRequest dto);
		//sign up 
		UserDTO signUp(@Valid UserDTO dto);
		UserDTO getUserDetails(Long userId);
		void signOut(String token);
		
}
