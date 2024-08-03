package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.sunbeam.entities.CarModel;

public interface CarModelDao extends JpaRepository<CarModel, Long> {

	@Query("SELECT DISTINCT c.carModelCompany FROM CarModel c")
    List<String> findDistinctCompanies();
}
