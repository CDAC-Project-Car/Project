package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.entities.Review;


public interface ReviewDao extends JpaRepository<Review, Long> {


	@Query("SELECT r FROM Review r WHERE  r.carModel.id = :id")
	List<Review> findReviewsByCarModelId(Long id);


}
