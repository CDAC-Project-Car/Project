package com.sunbeam.dao;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.sunbeam.dto.CarCardResponseDTO;
import com.sunbeam.entities.Car;
import com.sunbeam.entities.User;

public interface CarDao extends JpaRepository<Car, Long> {

	boolean existsByCarNumber(String carNumber);
	
	Optional<Car> findByCarModel_CarModelCompanyAndCarModel_ModelName(String carModelCompany, String modelName);

	Car findByCarNumber(String carNumber);

	List<Car> findByUser(User user);
	
//	@Query("SELECT c FROM Car c WHERE c.kmsDriven BETWEEN :minKm AND :maxKm")
//    List<Car> findByKmsDrivenBetween(@Param("minKm") Long minKm, @Param("maxKm") Long maxKm);
//
//    @Query("SELECT c FROM Car c WHERE c.carSellingPrice BETWEEN :minPrice AND :maxPrice")
//    List<Car> findByCarSellingPriceBetween(@Param("minPrice") Long minPrice, @Param("maxPrice") Long maxPrice);
//
//    @Query("SELECT c FROM Car c JOIN c.carModel cm WHERE cm.fuelType = :fuelType")
//    List<Car> findByCarModelFuelType(@Param("fuelType") String fuelType);
//
//    @Query("SELECT c FROM Car c JOIN c.carModel cm WHERE cm.carModelCompany = :carModelCompanyName")
//    List<Car> findByCarModelCarModelCompany(@Param("carModelCompanyName") String carModelCompanyName);

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
