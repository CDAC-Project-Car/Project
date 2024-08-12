package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.dto.CarCardResponseDTO;
import com.sunbeam.entities.Car;

public interface CarDao extends JpaRepository<Car, Long> {

	boolean existsByCarNumber(String carNumber);

	

	@Query("select c from Car c left join fetch c.images where c.carId = :carId")
	Car findCarById(Long carId);
	
	// derived query
	@EntityGraph(attributePaths = "images")
	List<Car> findByKmsDrivenBetween(Long minKm , Long maxKm);
	
	@EntityGraph(attributePaths = "images")
	List<Car> findByCarSellingPriceBetween(Long minPrice , Long maxPrice);
	
	
	
	
	
	// Custom Queries
	
	@Query("select new com.sunbeam.dto.CarCardResponseDTO(c.carId, c.carModel.carModelCompany, c.carModel.modelName, c.carModel.carSeriesName, c.carModel.transmission, c.rtoLocation, c.carMfgYear, c.kmsDriven, c.carSellingPrice, i.imagePath) from Car c left join Image i on i.car = c and i.isCoverImage = true where c.carModel.fuelType = :fuel")
	List<CarCardResponseDTO> getCarListByFuelType(String fuel);
	
	@Query("select new com.sunbeam.dto.CarCardResponseDTO(c.carId, c.carModel.carModelCompany, c.carModel.modelName, c.carModel.carSeriesName, c.carModel.transmission, c.rtoLocation, c.carMfgYear, c.kmsDriven, c.carSellingPrice, i.imagePath) from Car c left join Image i on i.car = c and i.isCoverImage = true where c.rtoLocation = :location")
	List<CarCardResponseDTO> getCarListByLocation(String location);
	
	
	@Query("select new com.sunbeam.dto.CarCardResponseDTO(c.carId, c.carModel.carModelCompany, c.carModel.modelName, c.carModel.carSeriesName, c.carModel.transmission, c.rtoLocation, c.carMfgYear, c.kmsDriven, c.carSellingPrice, i.imagePath) from Car c left join Image i on i.car = c and i.isCoverImage = true where c.carModel.carModelType = :type")
	List<CarCardResponseDTO> getCarListByBodyType(String type);
	
	
	@Query("select new com.sunbeam.dto.CarCardResponseDTO(c.carId, c.carModel.carModelCompany, c.carModel.modelName, c.carModel.carSeriesName, c.carModel.transmission, c.rtoLocation, c.carMfgYear, c.kmsDriven, c.carSellingPrice, i.imagePath) from Car c left join Image i on i.car = c and i.isCoverImage = true where c.carModel.carModelCompany = :brand")
	List<CarCardResponseDTO> getCarListByBrand(String brand);
	
	
	
	

}
