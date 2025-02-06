package com.tickettrail.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tickettrail.custom_exceptions.ApiException;
import com.tickettrail.custom_exceptions.AuthenticationException;
import com.tickettrail.custom_exceptions.ResourceNotFoundException;
import com.tickettrail.dto.ApiResponse;
import com.tickettrail.dto.AuthRequest;
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

		
//	@Override
//	public ApiResponse registerNewUser(UserDTO dto) {
//		// chk if user alrdy exists
//				if (userRepository.existsByEmail(dto.getEmail()))
//					throw new ApiException("User email already exists!!!!");
//				// map dto -> entity
//				User user = modelMapper.map(dto, User.class);
//				user.setPassword(passwordEncoder.encode(user.getPassword()));
//				User savedUser = userRepository.save(user);
//				return new ApiResponse("User registered with ID " + savedUser.getId(),"success");
//	}

	@Override
	public UserDTO authenticateUser(AuthRequest dto) {
		// 1.invoke dao 's method
				User user = userRepository.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
						.orElseThrow(() -> new AuthenticationException("Invalid Email or Password !!!!!!"));
				// valid login -user : persistent -> entity -> dto
				return modelMapper.map(user, UserDTO.class);
	}

	@Override
	public UserDTO signUp(@Valid UserDTO dto) {
		User user = userRepository.save(modelMapper.map(dto, User.class));
		return modelMapper.map(user, UserDTO.class);
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
		// TODO Auto-generated method stub
				User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Invalid User ID!!!!"));
				return modelMapper.map(user, UserDTO.class);
	}
	

}
