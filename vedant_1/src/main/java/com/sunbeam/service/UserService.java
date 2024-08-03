package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.entities.User;

public interface UserService {

	ApiResponse registerUser(User user);
	ApiResponse signIn(String email, String password);
}
