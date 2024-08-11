package com.sunbeam.service;

import javax.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.sunbeam.custom_exception.ApiResponseException;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserRegisterRequestDTO;
import com.sunbeam.dto.UserSignInResponseDTO;
import com.sunbeam.entities.Role;
import com.sunbeam.entities.User;
import com.sunbeam.security.JwtUtil;

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
    private JwtUtil jwtUtil;

//	@Override
//	public ApiResponse registerUser(UserRegisterRequestDTO user) {
//		if(userDao.existsByEmail(user.getEmail()))
//		{
//			throw new ApiResponseException("User already exists...!!!!!!");
//		}
//		User persistantUser = mapper.map(user, User.class);
//		userDao.save(persistantUser);
//		return new ApiResponse("Registered successfully....!");
//		
//	}

//	@Override
//	public UserSignInResponseDTO signIn(String email, String password) {
//		User persistentUser = userDao.findByEmail(email);
//		if(persistentUser!=null && persistentUser.getPassword().equals(password)) {
//			UserSignInResponseDTO user = mapper.map(persistentUser, UserSignInResponseDTO.class);
//			return user;
//		}			
//		throw new ApiResponseException("Invalid username or password..!!!");
//
//	}
    
    public User registerUser(UserRegisterRequestDTO userRegisterRequestDTO) {
        User user = new User();
        user.setEmail(userRegisterRequestDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userRegisterRequestDTO.getPassword()));
        // Save user
        return userDao.save(user);
    }


	
	public String signIn(String email, String password) {
        User user = userDao.findByEmail(email);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return jwtUtil.generateToken(email);
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
	
	@Override
	public ApiResponse deleteUser(String email) {
        User user = userDao.findByEmail(email);
        if (user != null) {
            userDao.delete(user);
            return new ApiResponse("User deleted successfully.");
        } else {
            return new ApiResponse("User not found with email: " + email);
        }
    }
	


}
