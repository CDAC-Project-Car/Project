package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sunbeam.dto.ReviewRequestDTO;
import com.sunbeam.service.ReviewService;

@RestController
@RequestMapping("/review")
public class ReviewController {
	
	@Autowired
	private ReviewService reviewService;
	
	@PostMapping("/add/{userId}/{carModelId}")
	public ResponseEntity<?> addReview(@RequestBody ReviewRequestDTO review, @PathVariable Long userId, @PathVariable Long carModelId)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(reviewService.addReview(review, userId, carModelId));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
		
	}
	
	@GetMapping("/getAll/{carModelId}")
	public ResponseEntity<?> getAllReviews(@PathVariable Long carModelId)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(reviewService.getAllReviews(carModelId));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
		
	}

}
