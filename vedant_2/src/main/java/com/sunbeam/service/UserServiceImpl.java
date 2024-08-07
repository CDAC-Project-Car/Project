package com.sunbeam.service;

import javax.persistence.EntityManagerFactory;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sunbeam.custom_exception.ApiResponseException;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;
	@Autowired
	private EntityManagerFactory entityManager;

	@Override
	public ApiResponse registerUser(User user) {
		if(userDao.existsByEmail(user.getEmail()))
		{
			throw new ApiResponseException("User already exists!!!!!!");
		}
		userDao.save(user);
		return new ApiResponse("User Added successfully....!");
		
	}

	@Override
	public ApiResponse signIn(String email, String password) {
		User user = userDao.findByEmail(email);
		if(user!=null && user.getPassword().equals(password))
			return new ApiResponse("Welcome " + user.getUserName());
		throw new ApiResponseException("Invalid username or password");

	}
	


}
