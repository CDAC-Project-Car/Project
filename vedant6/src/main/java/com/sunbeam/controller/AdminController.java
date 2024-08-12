package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.CarModelDeleteRequestDTO;
import com.sunbeam.dto.CarModelRequestDTO;
import com.sunbeam.entities.CarModel;
import com.sunbeam.service.CarModelService;
import com.sunbeam.service.CarService;
import com.sunbeam.service.UserService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

	@Autowired
	private CarModelService carModelService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CarService carService;
	
	@PostMapping("/addModel")
	public ResponseEntity<?> addCarModel(@RequestBody CarModelRequestDTO carModel)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carModelService.addCarModel(carModel));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	
	@DeleteMapping("/deleteModel")
	public ResponseEntity<?> deleteCarModel(@RequestBody CarModelDeleteRequestDTO carModel)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carModelService.deleteCarModel(carModel));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	@PutMapping("/beforeEditModel")
	public ResponseEntity<?> beforeEditCarModel(@RequestBody CarModelDeleteRequestDTO carModel)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carModelService.beforeEditCarModel(carModel));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	@PutMapping("/editModel")
	public ResponseEntity<?> editCarModel(@RequestBody CarModel carModel)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carModelService.editCarModel(carModel));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	@DeleteMapping("/deleteUser/{email}")
	public ResponseEntity<?> deleteUser(@PathVariable String email)
	{
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(userService.deleteUser(email));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	 @DeleteMapping("/deleteCar/{carId}")
	    public ResponseEntity<?> deleteCar(@PathVariable Long carId) {
	        try {
	            carService.deleteCar(carId);
	            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Car deleted successfully");
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	        }
	    }
}
