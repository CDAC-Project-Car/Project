package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserRegisterRequestDTO;
import com.sunbeam.dto.UserSignInResponseDTO;
import com.sunbeam.entities.User;

public interface UserService {

	//ApiResponse registerUser(UserRegisterRequestDTO user);
	
	//UserSignInResponseDTO signIn(String email, String password);
	
	public User registerUser(UserRegisterRequestDTO userRegisterRequestDTO);
	
	public String signIn(String email, String password);
	
	ApiResponse deleteUser(String email);
	
}
