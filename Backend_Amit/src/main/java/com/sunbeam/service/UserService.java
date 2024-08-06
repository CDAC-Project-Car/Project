package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserRegisterRequestDTO;
import com.sunbeam.dto.UserSignInResponseDTO;

public interface UserService {

	ApiResponse registerUser(UserRegisterRequestDTO user);
	UserSignInResponseDTO signIn(String email, String password);
	ApiResponse deleteUser(String email);
}
