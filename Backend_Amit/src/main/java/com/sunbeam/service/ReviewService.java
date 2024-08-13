package com.sunbeam.service;

import java.util.List;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.ReviewRequestDTO;
import com.sunbeam.dto.ReviewResponseDTO;

public interface ReviewService {

	ApiResponse addReview(ReviewRequestDTO review, Long userId, Long carModelId);

	List<ReviewResponseDTO> getAllReviews(Long carModelId);
	
	

}
