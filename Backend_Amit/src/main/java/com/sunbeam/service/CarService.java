package com.sunbeam.service;


import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CarRequestDTO;
import com.sunbeam.dto.CarDetailsResponseDTO;
import com.sunbeam.dto.CarBeforeEditResponseDTO;

public interface CarService {

	ApiResponse addCar(CarRequestDTO car, Long userId, Long modelId);

	CarDetailsResponseDTO getCarDetails(Long carId);

	CarBeforeEditResponseDTO beforeEditCarDetails(Long carId);

	ApiResponse editCarDetails(CarBeforeEditResponseDTO editedCar);

}
