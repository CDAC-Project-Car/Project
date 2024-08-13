package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sunbeam.dto.TransactionRequestDTO;
import com.sunbeam.service.TransactionService;

@RestController
@RequestMapping("/transaction")
@CrossOrigin
public class TransactionController {
	
	@Autowired
	private TransactionService transactionService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addTransaction(@RequestBody TransactionRequestDTO transaction)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(transactionService.addTransaction(transaction));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
		
	}
	
	@GetMapping("/getAll/{userId}")
	public ResponseEntity<?> getAllTransactions(@PathVariable Long userId)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(transactionService.getAllTransactions(userId));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
		
	}
	
	
	@GetMapping("/myOrders/{userId}")
	public ResponseEntity<?> myOrders(@PathVariable Long userId)
	{
		try {
			return ResponseEntity.status(HttpStatus.OK).body(transactionService.myOrders(userId));
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
		
	}
	
	

}
