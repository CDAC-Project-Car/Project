package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.CarBeforeEditResponseDTO;
import com.sunbeam.dto.CarRequestDTO;
import com.sunbeam.service.CarService;


@RestController
@RequestMapping("/cars")
public class CarController {
	
	@Autowired
	private CarService carService;
	
	@PostMapping("/sell")
	public ResponseEntity<?> addCar(@RequestBody CarRequestDTO car, @RequestParam Long userId, @RequestParam Long modelId)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carService.addCar(car, userId, modelId));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	
	@GetMapping("/viewDetails")
	public ResponseEntity<?> getCarDetails(@RequestParam Long carId)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carService.getCarDetails(carId));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	@GetMapping("/beforeEdit")
	public ResponseEntity<?> beforeEditCarDetails(@RequestParam Long carId)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carService.beforeEditCarDetails(carId));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	@PutMapping("/edit")
	public ResponseEntity<?> editCarDetails(@RequestBody CarBeforeEditResponseDTO editedCar)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carService.editCarDetails(editedCar));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

}
