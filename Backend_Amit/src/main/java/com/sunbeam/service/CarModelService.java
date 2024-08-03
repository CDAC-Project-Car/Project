package com.sunbeam.service;

import java.util.List;

import javax.validation.constraints.NotNull;

import com.sunbeam.dto.CarModelResponseDTO;

public interface CarModelService {

	List<String> getAllCarsByCompany();

	List<String> getAllModelsByCompany(String company);

	List<CarModelResponseDTO> getAllVariantsByModel(String model);

	//List<CarCompareResponseDTO> compareCars(Long id1, Long id2);

}
