package com.sunbeam.service;


import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CarRequestDTO;
import com.sunbeam.dto.ListedCarsResponseDTO;
import com.sunbeam.dto.CarDetailsResponseDTO;
import com.sunbeam.dto.CarBeforeEditResponseDTO;
import com.sunbeam.dto.CarCardResponseDTO;

public interface CarService {

	ApiResponse addCar(CarRequestDTO car, MultipartFile [] images, MultipartFile coverImage) throws IOException;

	CarDetailsResponseDTO getCarDetails(Long carId);

	CarBeforeEditResponseDTO beforeEditCarDetails(Long carId);

	ApiResponse editCarDetails(CarBeforeEditResponseDTO editedCar);

	ApiResponse deleteCarDetails(String carNumber);

	List<ListedCarsResponseDTO> listedCarsOfSeller(Long userId);

	ApiResponse deleteCar(Long carId);
	
	List<CarCardResponseDTO> getCarDetailsFilterByFuel(String fuel);
	
	List<CarCardResponseDTO> getCarDetailsFilterByKmDriven(Long minKm, Long maxKm);
	
	List<CarCardResponseDTO> getCarDetailsFilterByPriceRange(Long minPrice, Long maxPrice);
	
	
	List<CarCardResponseDTO> getCarDetailsFilterByLocation(String loacation);
	
	List<CarCardResponseDTO> getCarDetailsFilterByBodyType(String bodyType);
	
	List<CarCardResponseDTO> getCarDetailsFilterByBrand(String brand);

}
