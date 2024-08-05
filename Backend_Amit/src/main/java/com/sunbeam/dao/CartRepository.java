package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Cart;

public interface CartRepository extends JpaRepository<Cart,Long>{
	
}
