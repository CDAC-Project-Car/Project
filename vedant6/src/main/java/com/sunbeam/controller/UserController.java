package com.sunbeam.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.UserRegisterRequestDTO;
import com.sunbeam.dto.UserSignInResponseDTO;
import com.sunbeam.dto.UserSigninRequestDTO;
import com.sunbeam.entities.User;
import com.sunbeam.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin // for integration
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private com.sunbeam.security.JwtUtils jwtUtils;
	
	@Autowired
	private AuthenticationManager authMgr;
	
	@Autowired
	private UserDao userDao;
	
	  @PostMapping("/signup")
	    public ResponseEntity<?> createUser(@RequestBody UserRegisterRequestDTO createUserDTO) {
	     
	       
	        return ResponseEntity.status(HttpStatus.CREATED)
	        .body(userService.createUser(createUserDTO));
	    }
	    

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody 
			@Valid UserSigninRequestDTO request) {
		System.out.println("in sign in" + request);
		//create a token(implementation of Authentication i/f)
		//to store un verified user email n pwd
		UsernamePasswordAuthenticationToken token=new 
				UsernamePasswordAuthenticationToken(request.getEmail(), 
						request.getPassword());
		//invoke auth mgr's authenticate method;
		org.springframework.security.core.Authentication verifiedToken = authMgr.authenticate(token);
		//=> authentication n authorization  successful !
		System.out.println(verifiedToken.getPrincipal().getClass());//custom user details object
		//create JWT n send it to the clnt in response
		Optional<User> user=userDao.findByEmail(request.getPassword());
		
	// UserDTO userdto=	userService.getUserByEmail(request.getEmail());
		
	 UserSignInResponseDTO resp=new UserSignInResponseDTO
				(jwtUtils.generateJwtToken(verifiedToken),
				"Successful Auth!!!!");
	    
		return ResponseEntity.
				status(HttpStatus.CREATED).body(resp);
	}
	

}
