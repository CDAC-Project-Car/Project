package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.AddToCartRequestDTO;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CartResponseDTO;


public interface CartService {

	List<CartResponseDTO> listAllCartItems(Long userId);
	
	ApiResponse addItemToCart(Long userId,AddToCartRequestDTO cardto);
	
	ApiResponse removeItemFromCart(Long userID,Long carId);

}

