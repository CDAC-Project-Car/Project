package com.sunbeam.service;

import javax.persistence.EntityManagerFactory;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sunbeam.custom_exception.ApiResponseException;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserResponseDTO;
import com.sunbeam.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponse registerUser(User user) {
		if(userDao.existsByEmail(user.getEmail()))
		{
			throw new ApiResponseException("User already exists...!!!!!!");
		}
		userDao.save(user);
		return new ApiResponse("Registered successfully....!");
		
	}

	@Override
	public UserResponseDTO signIn(String email, String password) {
		User persistentUser = userDao.findByEmail(email);
		if(persistentUser!=null && persistentUser.getPassword().equals(password)) {
			UserResponseDTO user = mapper.map(persistentUser, UserResponseDTO.class);
			return user;
		}			
		throw new ApiResponseException("Invalid username or password..!!!");

	}
	


}
