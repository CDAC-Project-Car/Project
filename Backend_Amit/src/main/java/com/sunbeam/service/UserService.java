package com.sunbeam.service;

import java.util.List;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserDetailsForAdminResponseDTO;
import com.sunbeam.dto.UserRegisterRequestDTO;
import com.sunbeam.dto.UserResponseDTO;

public interface UserService {

	//ApiResponse registerUser(UserRegisterRequestDTO user);
	//String signIn(String email, String password);
	ApiResponse deleteUser(String email);
	UserDetailsForAdminResponseDTO getUserDetails(String email);
	String createUser(UserRegisterRequestDTO createUserDTO);
	UserResponseDTO beforeEdit(Long userId);
	ApiResponse edit(UserResponseDTO user);
	List<UserDetailsForAdminResponseDTO> getAllUserDetails();
}
