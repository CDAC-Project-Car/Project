package com.sunbeam.service;

import java.util.Optional;

import javax.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.sunbeam.custom_exception.ApiResponseException;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserDetailsForAdminResponseDTO;
import com.sunbeam.dto.UserRegisterRequestDTO;
import com.sunbeam.dto.UserSignInResponseDTO;
import com.sunbeam.entities.Role;
import com.sunbeam.entities.User;
import com.sunbeam.security.JwtUtils;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private ModelMapper mapper;

	@Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtil;

//	@Override
//	public ApiResponse registerUser(UserRegisterRequestDTO user) {
//		if(userDao.existsByEmail(user.getEmail()))
//		{
//			throw new ApiResponseException("User already exists...!!!!!!");
//		}
//		User persistantUser = mapper.map(user, User.class);
//		user.setEmail(user.getEmail());
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//		userDao.save(persistantUser);
//		return new ApiResponse("Registered successfully....!");
//		
//	}
	
	 @Override
	  	public String createUser(UserRegisterRequestDTO createUserDTO) {
	      	
	      	 if (userDao.existsByEmail(createUserDTO.getEmail())) {
	               return "Error: Email is already in use!";
	           }

	           if (userDao.existsByUserName(createUserDTO.getUserName())) {
	               return   "Error: Username is already taken!";
	           }
	          User user = mapper.map(createUserDTO, User.class);
	          
	          String pass=user.getPassword();
	          //user.setRole(Role.ADMIN);
	          user.setPassword(passwordEncoder.encode(pass));
	          
	          
	          User savedUser = userDao.save(user);
	          return "User registered Successfully";
	      }

	// @Override
	// public UserSignInResponseDTO signIn(String email, String password) {
	// 	User persistentUser = userDao.findByEmail(email);
	// 	if(persistentUser!=null && persistentUser.getPassword().equals(password)) {
	// 		UserSignInResponseDTO user = mapper.map(persistentUser, UserSignInResponseDTO.class);
	// 		return user;
	// 	}			
	// 	throw new ApiResponseException("Invalid username or password..!!!");

	// }

//	public String signIn(String email, String password) {
//        User user = userDao.findByEmail(email);
//        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
//            return jwtUtil.generateToken(email);
//        } else {
//            throw new RuntimeException("Invalid credentials");
//        }
//    }

//	@Override
//	public ApiResponse deleteUser(String email) {
//		Optional<User> user = userDao.findByEmail(email);
//		if(user== null || user.getRole() == Role.ADMIN)
//			throw new ApiResponseException("User record not found or Cannot delete ADMIN...!");
//		userDao.delete(user);
//		return new ApiResponse("User deleted successfully");
//		
//	}
	 
	 @Override
		public ApiResponse deleteUser(String email) {
	        User user = userDao.findByEmail(email);
	        if (user != null) {
	            userDao.delete(user);
	            return new ApiResponse("User deleted successfully.");
	        } else {
	            throw new ApiResponseException("User not found with email: " + email);
	        }
	    }

	@Override
	public UserDetailsForAdminResponseDTO getUserDetails(String email) {
		if(userDao.existsByEmail(email)) {
			User user = userDao.findByEmail(email);
			UserDetailsForAdminResponseDTO persitantUser = mapper.map(user, UserDetailsForAdminResponseDTO.class);
			return persitantUser;
		}
		throw new ApiResponseException("User with this email not found...!");
			
	}
	


}
