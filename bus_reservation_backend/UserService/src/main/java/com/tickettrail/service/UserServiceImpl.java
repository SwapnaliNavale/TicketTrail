package com.tickettrail.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tickettrail.custom_exceptions.ApiException;
import com.tickettrail.custom_exceptions.AuthenticationException;
import com.tickettrail.custom_exceptions.ResourceNotFoundException;
import com.tickettrail.dto.ApiResponse;
import com.tickettrail.dto.AuthRequest;
import com.tickettrail.dto.AuthResponse;
import com.tickettrail.dto.UserDTO;
import com.tickettrail.entities.User;
import com.tickettrail.repositories.UserRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;


@Service
@Transactional
public class UserServiceImpl implements UserService {

	// depcy - dao
		@Autowired
		private UserRepository userRepository;
		// model mapper
		@Autowired
		private ModelMapper modelMapper;
		//pwd encoder
		@Autowired
		private PasswordEncoder passwordEncoder;
		// JWT token service for handling token invalidation
		@Autowired
		private JwtTokenService jwtTokenService;

		
		@Override
	    public ApiResponse<String> signUp(UserDTO dto) {
	        if (userRepository.existsByEmail(dto.getEmail())) {
	            throw new ApiException("User email already exists!");
	        }
	        User user = modelMapper.map(dto, User.class);
	        user.setPassword(passwordEncoder.encode(user.getPassword()));
	        userRepository.save(user);
	        return ApiResponse.success("User successfully registered");
	    }

		@Override
		public ApiResponse<AuthResponse> authenticateUser(AuthRequest dto) {
		    User user = userRepository.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
		            .orElseThrow(() -> new AuthenticationException("Invalid Email or Password!"));

		    String token = jwtTokenService.generateToken(user);

		    return new ApiResponse<>("success", new AuthResponse(token), "User logged in successfully");
		}


		    @Override
		    public void signOut(String token) {
		        if (token == null || token.isEmpty()) {
		            throw new IllegalArgumentException("Invalid token provided");
		        }
		        jwtTokenService.invalidateToken(token);
		    }

		    @Override
		    public UserDTO getUserDetails(Long userId) {
		        User user = userRepository.findById(userId)
		                .orElseThrow(() -> new ResourceNotFoundException("Invalid User ID!"));
		        return modelMapper.map(user, UserDTO.class);
		    }

}
