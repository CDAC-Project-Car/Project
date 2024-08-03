package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserResponseDTO;
import com.sunbeam.entities.User;

public interface UserService {

	ApiResponse registerUser(User user);
	UserResponseDTO signIn(String email, String password);
}
