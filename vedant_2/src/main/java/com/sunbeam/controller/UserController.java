package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sunbeam.dto.UserRequestDTO;
import com.sunbeam.entities.User;
import com.sunbeam.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin // for integration
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/registerUser")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(userService.registerUser(user));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	

	@PostMapping("/login")
	public ResponseEntity<?> signIn(@RequestBody UserRequestDTO user) {
			try {
				return ResponseEntity.ok(userService.signIn(user.getEmail(), user.getPassword()));
			}catch (Exception e) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
			}
	}

}
