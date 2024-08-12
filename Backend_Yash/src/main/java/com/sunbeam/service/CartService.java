package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.entities.Car;
import com.sunbeam.entities.Cart;
import com.sunbeam.entities.User;

public interface CartService {

	List<Car> listAllCartItems(Long cartId);
	
	Cart addItemToCart(Long cartId,Long carId);
	
	Cart removeItemFromCart(Long cartId,Long carId);

	ApiResponse createCart(Cart cart);
	
}
