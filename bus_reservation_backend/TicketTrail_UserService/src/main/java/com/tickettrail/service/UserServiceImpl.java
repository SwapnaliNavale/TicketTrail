package com.bus.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bus.custom_exceptions.ApiException;
import com.bus.dto.ApiResponse;
import com.bus.dto.UserDTO;
import com.bus.entities.User;
import com.bus.repositories.UserRepository;

import jakarta.transaction.Transactional;


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
		
	@Override
	public ApiResponse registerNewUser(UserDTO dto) {
		// chk if user alrdy exists
				if (userRepository.existsByEmail(dto.getEmail()))
					throw new ApiException("User email already exists!!!!");
				// map dto -> entity
				User user = modelMapper.map(dto, User.class);
				user.setPassword(passwordEncoder.encode(user.getPassword()));
				User savedUser = userRepository.save(user);
				return new ApiResponse("User registered with ID " + savedUser.getId(),"success");
	}
	

}
