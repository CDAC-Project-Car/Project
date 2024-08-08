package com.sunbeam.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.AddToCartRequestDTO;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CartResponseDTO;
import com.sunbeam.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {
	
	@Autowired
    private CartService cartService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<CartResponseDTO>> listAllCartItems(@PathVariable Long userId) {
        List<CartResponseDTO> cartItems = cartService.listAllCartItems(userId);
        return ResponseEntity.ok(cartItems);
    }

    @PostMapping("/{userId}/add")
    public ResponseEntity<ApiResponse> addItemToCart(
            @PathVariable Long userId,
            @RequestBody AddToCartRequestDTO addToCartRequestDTO
    ) {
        ApiResponse response = cartService.addItemToCart(userId, addToCartRequestDTO);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{userId}/remove/{carId}")
    public ResponseEntity<ApiResponse> removeItemFromCart(
            @PathVariable Long userId,
            @PathVariable Long carId
    ) {
        ApiResponse response = cartService.removeItemFromCart(userId, carId);
        return ResponseEntity.ok(response);
    }
}
