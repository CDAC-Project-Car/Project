package com.sunbeam.service;

import javax.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sunbeam.custom_exception.ApiResponseException;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserRegisterRequestDTO;
import com.sunbeam.dto.UserSignInResponseDTO;
import com.sunbeam.entities.Role;
import com.sunbeam.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponse registerUser(UserRegisterRequestDTO user) {
		if(userDao.existsByEmail(user.getEmail()))
		{
			throw new ApiResponseException("User already exists...!!!!!!");
		}
		User persistantUser = mapper.map(user, User.class);
		userDao.save(persistantUser);
		return new ApiResponse("Registered successfully....!");
		
	}

	@Override
	public UserSignInResponseDTO signIn(String email, String password) {
		User persistentUser = userDao.findByEmail(email);
		if(persistentUser!=null && persistentUser.getPassword().equals(password)) {
			UserSignInResponseDTO user = mapper.map(persistentUser, UserSignInResponseDTO.class);
			return user;
		}			
		throw new ApiResponseException("Invalid username or password..!!!");

	}

	@Override
	public ApiResponse deleteUser(String email) {
		User user = userDao.findByEmail(email);
		if(user== null || user.getRole() == Role.ADMIN)
			throw new ApiResponseException("User record not found or Cannot delete ADMIN...!");
		userDao.delete(user);
		return new ApiResponse("User deleted successfully");
		
	}
	


}
