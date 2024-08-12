package com.sunbeam.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.ApiResponseException;
import com.sunbeam.dao.CarDao;
import com.sunbeam.dao.CartRepository;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.entities.Car;
import com.sunbeam.entities.Cart;
import com.sunbeam.entities.User;

@Transactional
@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartRepository cartRepo;
	
	@Autowired 
	private CarDao carDao;
	
	
	@Override
	public List<Car> listAllCartItems(Long cartId) {
		Optional<Cart> cartOptional=cartRepo.findById(cartId);
		if(cartOptional.isPresent()) {
			Cart cart=cartOptional.get();
			return cart.getCars();
		}else {
			throw new RuntimeException("Cart not found");
		}
	}

	@Override
	public Cart addItemToCart(Long cartId, Long carId) {
		Optional<Cart> cartOptional=cartRepo.findById(carId);
		Optional<Car> carOptional=carDao.findById(carId);
		
		if(cartOptional.isPresent()&& carOptional.isPresent()) {
			Cart cart=cartOptional.get();
			Car car=carOptional.get();
			
			cart.addToCart(car);
			return cartRepo.save(cart);
		}else {
			throw new RuntimeException("Cart or Car not found");
		}
	}

	@Override
	public Cart removeItemFromCart(Long cartId, Long carId) {
		Optional<Cart> cartOptional=cartRepo.findById(carId);
		Optional<Car> carOptional=carDao.findById(carId);
		
		if(cartOptional.isPresent()&& carOptional.isPresent()) {
			Cart cart=cartOptional.get();
			Car car=carOptional.get();
			
			cart.removeFromCart(car);
			carDao.delete(car);
			
			return cartRepo.save(cart);
		}else {
			throw new RuntimeException("Cart or Car not found");
		}
	}

	@Override
	public ApiResponse createCart(Cart cart) {
		if(cartRepo.existsById(cart.getCartId())) {
			return new ApiResponse("Cart already exsists...!!!");
		}
		cartRepo.save(cart);
		return new ApiResponse("Cart created successfully...!!!");
	}
	
}
