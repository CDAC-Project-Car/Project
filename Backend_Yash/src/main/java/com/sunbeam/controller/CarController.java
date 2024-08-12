package com.sunbeam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.dto.CarBeforeEditResponseDTO;
import com.sunbeam.dto.CarDetailsResponseDTO;
import com.sunbeam.dto.CarRequestDTO;
import com.sunbeam.service.CarService;

@RestController
@RequestMapping("/cars")
public class CarController {

	@Autowired
	private CarService carService;

 

	@PostMapping("/sell")
	public ResponseEntity<?> addCar(@RequestPart CarRequestDTO dto, @RequestPart MultipartFile[] images,
			@RequestPart MultipartFile coverImage) {
		try {
			System.out.println(dto);
			return ResponseEntity.ok(carService.addCar(dto, images, coverImage));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@GetMapping("/viewDetails/{carId}")
	public ResponseEntity<?> getCarDetails(@PathVariable Long carId) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carService.getCarDetails(carId));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
 

	@GetMapping("/beforeEdit")
	public ResponseEntity<?> beforeEditCarDetails(@RequestParam Long carId) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carService.beforeEditCarDetails(carId));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@PutMapping("/edit")
	public ResponseEntity<?> editCarDetails(@RequestBody CarBeforeEditResponseDTO editedCar) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(carService.editCarDetails(editedCar));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

//	---------------- Filteration ----------------------------------------------

	@GetMapping("/filter/fuelType/{fuel}")
	public ResponseEntity<?> filterByFuelType(@PathVariable String fuel) {
		try {
			return ResponseEntity.ok(carService.getCarDetailsFilterByFuel(fuel));

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	@GetMapping("/filter/location/{location}")
	public ResponseEntity<?> filterByLocation(@PathVariable String location) {
		try {
			return ResponseEntity.ok(carService.getCarDetailsFilterByLocation(location));
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	
	@GetMapping("/filter/bodyType/{bodyType}")
	public ResponseEntity<?> filterByBodyType(@PathVariable String bodyType) {
		try {
			return ResponseEntity.ok(carService.getCarDetailsFilterByBodyType(bodyType));
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	@GetMapping("/filter/brand/{brand}")
	public ResponseEntity<?> filterByBrand(@PathVariable String brand) {
		try {
			return ResponseEntity.ok(carService.getCarDetailsFilterByBrand(brand));
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	
	
	@GetMapping("filter/km/{minKm}/{maxKm}")
	public ResponseEntity<?> getCarsByKmFilter(@PathVariable Long minKm, @PathVariable Long maxKm) {

		try {
			return ResponseEntity.ok(carService.getCarDetailsFilterByKmDriven(minKm, maxKm));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	@GetMapping("filter/price/{minPrice}/{maxPrice}")
	public ResponseEntity<?> getCarsByPrice(@PathVariable Long minPrice, @PathVariable Long maxPrice) {
		
		try {
			return ResponseEntity.ok(carService.getCarDetailsFilterByPriceRange(minPrice, maxPrice));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	

	
	
}
