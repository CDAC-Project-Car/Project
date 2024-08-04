package com.sunbeam.service;

import java.util.List;

import javax.validation.constraints.NotNull;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CarCompareResponseDTO;
import com.sunbeam.dto.CarModelDeleteRequestDTO;
import com.sunbeam.dto.CarModelResponseDTO;
import com.sunbeam.entities.CarModel;

public interface CarModelService {

	List<String> getAllCarsByCompany();

	List<String> getAllModelsByCompany(String company);

	List<CarModelResponseDTO> getAllVariantsByModel(String model);

	List<CarCompareResponseDTO> compareCars(Long id1, Long id2);

	ApiResponse addCarModel(CarModel carModel);

	ApiResponse deleteCarModel(CarModelDeleteRequestDTO carModel);

}
