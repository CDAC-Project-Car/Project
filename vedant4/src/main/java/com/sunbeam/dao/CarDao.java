package com.sunbeam.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Car;
import com.sunbeam.entities.User;

public interface CarDao extends JpaRepository<Car, Long> {

	boolean existsByCarNumber(String carNumber);
	Optional<Car> findByCarModel_CarModelCompanyAndCarModel_ModelName(String carModelCompany, String modelName);
	List<Car> findByUser(User user);
	
	@Query("SELECT c FROM Car c WHERE c.kmsDriven BETWEEN :minKm AND :maxKm")
    List<Car> findByKmsDrivenBetween(@Param("minKm") Long minKm, @Param("maxKm") Long maxKm);

    @Query("SELECT c FROM Car c WHERE c.carSellingPrice BETWEEN :minPrice AND :maxPrice")
    List<Car> findByCarSellingPriceBetween(@Param("minPrice") Long minPrice, @Param("maxPrice") Long maxPrice);

    @Query("SELECT c FROM Car c JOIN c.carModel cm WHERE cm.fuelType = :fuelType")
    List<Car> findByCarModelFuelType(@Param("fuelType") String fuelType);

    @Query("SELECT c FROM Car c JOIN c.carModel cm WHERE cm.carModelCompany = :carModelCompanyName")
    List<Car> findByCarModelCarModelCompany(@Param("carModelCompanyName") String carModelCompanyName);
	
}
