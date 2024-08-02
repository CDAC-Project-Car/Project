package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.entities.User;
import com.sunbeam.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin // for integration
public class UserController {

	@Autowired
	private UserService us;

	@PostMapping("/addUser")
	public ResponseEntity<?> addNewUser(@RequestBody User user) {
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(us.addNewUser(user));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
	}
	

	

	@PostMapping("/login")
	public ResponseEntity<?> signIn(@RequestBody User u) {
		try {

			return ResponseEntity.ok(us.signIn(u));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("invalid"));
		}
	}

}
