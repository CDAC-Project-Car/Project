package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserDetailsForAdminResponseDTO;
import com.sunbeam.dto.UserRegisterRequestDTO;
import com.sunbeam.dto.UserSignInResponseDTO;

public interface UserService {

	//ApiResponse registerUser(UserRegisterRequestDTO user);
	//String signIn(String email, String password);
	ApiResponse deleteUser(String email);
	UserDetailsForAdminResponseDTO getUserDetails(String email);
	String createUser(UserRegisterRequestDTO createUserDTO);
}
