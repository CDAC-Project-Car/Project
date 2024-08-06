package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sunbeam.entities.Car;

public interface CarDao extends JpaRepository<Car, Long> {

}
