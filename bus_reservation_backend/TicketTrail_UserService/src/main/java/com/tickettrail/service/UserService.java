package com.bus.service;

import com.bus.dto.ApiResponse;
import com.bus.dto.UserDTO;

public interface UserService {
	ApiResponse registerNewUser(UserDTO dto);
}
