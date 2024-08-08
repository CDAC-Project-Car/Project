package com.sunbeam.service;


import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CarRequestDTO;
import com.sunbeam.dto.ListedCarsResponseDTO;
import com.sunbeam.dto.CarDetailsResponseDTO;
import com.sunbeam.dto.CarBeforeEditResponseDTO;

public interface CarService {

	ApiResponse addCar(CarRequestDTO car, Long userId, Long modelId);

	CarDetailsResponseDTO getCarDetails(Long carId);

	CarBeforeEditResponseDTO beforeEditCarDetails(Long carId);

	ApiResponse editCarDetails(CarBeforeEditResponseDTO editedCar);
	
	List<ListedCarsResponseDTO> listedCarsOfSeller(Long userId);
	
	
	
	List<CarDetailsResponseDTO> getCarDetailsByFilterKm(Long minKm,Long maxKm);
	
	List<CarDetailsResponseDTO> getCarDetailsByFilterPrice(Long minPrice,Long maxPrice);
	
	List<CarDetailsResponseDTO> getCarDetailsByFilterFuel(String fuelType);
	
	List<CarDetailsResponseDTO> getCarDetailsByFilterCompanyName(String carModelCompanyName);
}
