package com.sunbeam.controller;

import javax.validation.constraints.NotNull;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sunbeam.service.CarModelService;

@RestController
@RequestMapping("/carModel")
@CrossOrigin 
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
	
	@GetMapping("/model/{company}")
	public ResponseEntity<?> getAllModelsByCompany(@PathVariable @NotNull String company)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carModelService.getAllModelsByCompany(company));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
		
	}
	
	@GetMapping("/variant/{model}")
	public ResponseEntity<?> getAllVariantsByModel(@PathVariable @NotNull String model)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carModelService.getAllVariantsByModel(model));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
//	@GetMapping("/compare/{id1}/{id2}")
//	public ResponseEntity<?> compareCars(@PathVariable @NotNull Long id1, @PathVariable @NotNull Long id2)
//	{
//		try {
//			return ResponseEntity.status(HttpStatus.OK).body(carModelService.compareCars(id1,id2));
//		}catch (Exception e) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//		}
//		
//	}
	
	
}
