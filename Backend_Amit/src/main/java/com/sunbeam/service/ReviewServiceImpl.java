package com.sunbeam.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.ApiResponseException;
import com.sunbeam.dao.CarModelDao;
import com.sunbeam.dao.ReviewDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.ReviewRequestDTO;
import com.sunbeam.dto.ReviewResponseDTO;
import com.sunbeam.entities.CarModel;
import com.sunbeam.entities.Review;
import com.sunbeam.entities.User;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService {
	
	@Autowired
	private ReviewDao reviewDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private CarModelDao carModelDao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponse addReview(ReviewRequestDTO review, Long userId, Long carModelId) {
		if(userDao.existsById(userId) &&  carModelDao.existsById(carModelId)) {
			User user = userDao.findById(userId).orElseThrow(()-> new ApiResponseException("User not found...!"));
			CarModel carModel = carModelDao.findById(carModelId).orElseThrow(()-> new ApiResponseException("CarModel not found...!"));
			Review persistantReview = mapper.map(review, Review.class);
			persistantReview.setUser(user);
			persistantReview.setCarModel(carModel);
			persistantReview.setReviewDate(LocalDateTime.now());
			reviewDao.save(persistantReview);
			return new ApiResponse("Review added successfully....!");
		}
		throw new ApiResponseException("Invalid User Id or Car Model Id");
	}
	

	@Override
	public List<ReviewResponseDTO> getAllReviews(Long carModelId) {
		if(carModelDao.existsById(carModelId)) {
			List<Review> reviews = reviewDao.findReviewsByCarModelId(carModelId);
			List<ReviewResponseDTO> reviewList = new ArrayList<>();
			for(Review review:reviews) {
				ReviewResponseDTO persistantReview = mapper.map(review, ReviewResponseDTO.class);
				persistantReview.setUserName(review.getUser().getUserName());
				reviewList.add(persistantReview);
			}
			return reviewList;
		}
		throw new ApiResponseException("Invalid Car Model Id");
	}

}
