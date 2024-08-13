package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.MyOrdersResponseDTO;
import com.sunbeam.dto.TransactionRequestDTO;
import com.sunbeam.dto.TransactionResponseDTO;

public interface TransactionService {

	ApiResponse addTransaction(TransactionRequestDTO transaction);

	List<TransactionResponseDTO> getAllTransactions(Long userId);

	List<MyOrdersResponseDTO> myOrders(Long userId);

}
