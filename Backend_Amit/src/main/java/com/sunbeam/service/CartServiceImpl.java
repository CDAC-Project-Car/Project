package com.sunbeam.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sunbeam.dao.CarDao;
import com.sunbeam.dao.CartRepository;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.AddToCartRequestDTO;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CartResponseDTO;
import com.sunbeam.entities.Car;
import com.sunbeam.entities.CarModel;
import com.sunbeam.entities.Cart;
import com.sunbeam.entities.User;

@Transactional
@Service
public class CartServiceImpl implements CartService {

	
	@Autowired
    private CartRepository cartRepository;

    @Autowired
    private CarDao carRepository;

    @Autowired
    private UserDao userRepository;
    
   
    
    @Override
    public List<CartResponseDTO> listAllCartItems(Long userId) {
        Optional<Cart> cartOpt = cartRepository.findByUser_UserId(userId);
        if (cartOpt.isPresent()) {
            Cart cart = cartOpt.get();
            return cart.getCars().stream().map(car -> {
                CarModel model = car.getCarModel();
                return new CartResponseDTO(
                    model.getCarModelCompany(),
                    model.getModelName(),
                    car.getCarSellingPrice()
                );
            }).collect(Collectors.toList());
        }
        return List.of();
    }

	
	@Override
    public ApiResponse addItemToCart(Long userId, AddToCartRequestDTO addToCartRequestDTO) {
        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isEmpty()) {
            return new ApiResponse("User not found");
        }
        User user = userOpt.get();

        Optional<Car> carOpt = carRepository.findByCarModel_CarModelCompanyAndCarModel_ModelName(
            addToCartRequestDTO.getCarModelCompany(),
            addToCartRequestDTO.getModelName()
        );
        if (carOpt.isEmpty()) {
            return new ApiResponse("Car not found");
        }
        Car car = carOpt.get();

        Optional<Cart> cartOpt = cartRepository.findByUser_UserId(userId);
        Cart cart;
        if (cartOpt.isPresent()) {
            cart = cartOpt.get();
        } else {
            cart = new Cart();
            cart.setUser(user);
        }

        cart.getCars().add(car);
        cartRepository.save(cart);

        return new ApiResponse("Car added to cart successfully");
    }


	@Override
    public ApiResponse removeItemFromCart(Long userId, Long carId) {
        Optional<Cart> cartOpt = cartRepository.findByUser_UserId(userId);
        if (cartOpt.isEmpty()) {
            return new ApiResponse("Cart not found");
        }
        Cart cart = cartOpt.get();

        boolean removed = cart.getCars().removeIf(car -> car.getCarId().equals(carId));
        if (!removed) {
            return new ApiResponse("Car not found in cart");
        }

        cartRepository.save(cart);
        return new ApiResponse("Car removed from cart successfully");
    }
	}
	
	


	
