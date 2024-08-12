package com.sunbeam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.User;

public interface UserDao extends JpaRepository<User,Long>{
	
	boolean existsByEmail(String email);
	Optional<User> findByEmail(String email);
	Optional<User> findByUserId(Long userId);
	boolean existsByUserName(String userName);

}
