package com.sunbeam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.CarBeforeEditResponseDTO;
import com.sunbeam.dto.CarDetailsResponseDTO;
import com.sunbeam.dto.CarRequestDTO;
import com.sunbeam.dto.ListedCarsResponseDTO;
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
	
	 @GetMapping("/sellerListedCars/{userId}")
	    public ResponseEntity<List<ListedCarsResponseDTO>> listedCarsOfSeller(@PathVariable Long userId) {
	        List<ListedCarsResponseDTO> response = carService.listedCarsOfSeller(userId);
	        return ResponseEntity.ok(response);
	    }
	 
	 @GetMapping("filter/km")
	    public ResponseEntity<List<CarDetailsResponseDTO>> getCarsByKmFilter(
	            @RequestParam Long minKm,
	            @RequestParam Long maxKm) {
	        List<CarDetailsResponseDTO> carDetails = carService.getCarDetailsByFilterKm(minKm, maxKm);
	        return new ResponseEntity<>(carDetails, HttpStatus.OK);
	    }

	    @GetMapping("filter/price")
	    public ResponseEntity<List<CarDetailsResponseDTO>> getCarsByPriceFilter(
	            @RequestParam Long minPrice,
	            @RequestParam Long maxPrice) {
	        List<CarDetailsResponseDTO> carDetails = carService.getCarDetailsByFilterPrice(minPrice, maxPrice);
	        return new ResponseEntity<>(carDetails, HttpStatus.OK);
	    }

	    @GetMapping("/filter/fuel")
	    public ResponseEntity<List<CarDetailsResponseDTO>> getCarsByFuelFilter(
	            @RequestParam String fuelType) {
	        List<CarDetailsResponseDTO> carDetails = carService.getCarDetailsByFilterFuel(fuelType);
	        return new ResponseEntity<>(carDetails, HttpStatus.OK);
	    }

	    @GetMapping("/filter/company")
	    public ResponseEntity<List<CarDetailsResponseDTO>> getCarsByCompanyFilter(
	            @RequestParam String carModelCompanyName) {
	        List<CarDetailsResponseDTO> carDetails = carService.getCarDetailsByFilterCompanyName(carModelCompanyName);
	        return new ResponseEntity<>(carDetails, HttpStatus.OK);
	    }
	

}
