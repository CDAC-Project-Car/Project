package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.service.CarModelService;
import com.sunbeam.service.CarServiceImpl;

@RestController
@RequestMapping("/carModel")
public class CarModelController {
	
	@Autowired
	private CarModelService carModelService;
	
	@GetMapping("/company")
	public ResponseEntity<?> getAllCarsByCompany()
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carModelService.getAllCarsByCompany());
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

}
