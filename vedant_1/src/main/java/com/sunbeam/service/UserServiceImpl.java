package com.sunbeam.service;

import javax.persistence.EntityManagerFactory;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.ApiException;
import com.sunbeam.dao.UserDao;
import com.sunbeam.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao ud;
	@Autowired
	private EntityManagerFactory entityManager;

	@Override
	public User addNewUser(User user) {
		if(ud.existsByName(user.getName()))
		{
			throw new ApiException("User already exists");
		}
		return ud.save(user);
	}

	@Override
	public User signIn(User u) {

		User user = ud.findByEmailAndPassword(u.getEmail(), u.getPassword()).orElseThrow(()-> new ApiException("vehicle not found"));
		
		return user;

	}

}
