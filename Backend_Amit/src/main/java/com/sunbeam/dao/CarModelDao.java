package com.sunbeam.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.sunbeam.dto.CarModelResponseDTO;
import com.sunbeam.entities.CarModel;


public interface CarModelDao extends JpaRepository<CarModel, Long> {

	//List<String> findDistinctByCarModelCompany();

	@Query("SELECT DISTINCT c.carModelCompany FROM CarModel c")
    List<String> findDistinctCompanies();

	@Query("SELECT DISTINCT c.modelName FROM CarModel c WHERE  c.carModelCompany = :company")
	List<String> findModelsByComapny(String company);

	@Query("SELECT new com.sunbeam.dto.CarModelResponseDTO(c.carModelId, c.carSeriesName) FROM CarModel c WHERE c.modelName = :model")
	List<CarModelResponseDTO> findVariantsByModel(String model);

	CarModel findByCarModelId(Long id);

	boolean existsByCarModelCompany(String carModelCompany);

	boolean existsByModelName(String modelName);

	boolean existsByCarSeriesName(String carSeriesName);

	void deleteByCarSeriesName(String carSeriesName);

	CarModel findByCarSeriesName(String carSeriesName);
}
