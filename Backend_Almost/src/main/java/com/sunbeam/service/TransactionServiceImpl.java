package com.sunbeam.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sunbeam.custom_exception.ApiResponseException;
import com.sunbeam.dao.CarDao;
import com.sunbeam.dao.TransactionDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.MyOrdersResponseDTO;
import com.sunbeam.dto.TransactionRequestDTO;
import com.sunbeam.dto.TransactionResponseDTO;
import com.sunbeam.entities.Car;
import com.sunbeam.entities.Transaction;
import com.sunbeam.entities.User;


@Service
@Transactional
public class TransactionServiceImpl implements TransactionService {
	
	@Autowired
	private TransactionDao transactionDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private CarDao carDao;
	
	@Autowired
	private ModelMapper mapper;
	

	@Override
	public ApiResponse addTransaction(TransactionRequestDTO transaction) {
		if(userDao.existsById(transaction.getUserId()) && carDao.existsById(transaction.getCarId())) {
			User user = userDao.findById(transaction.getUserId()).orElseThrow(()-> new ApiResponseException("User not found...!"));
			Car car = carDao.findById(transaction.getCarId()).orElseThrow(()-> new ApiResponseException("Car not found...!"));
			Transaction persistantTransaction = mapper.map(transaction, Transaction.class);
			persistantTransaction.setUser(user);
			persistantTransaction.setCar(car);
			persistantTransaction.setTransactionDate(LocalDateTime.now());
			persistantTransaction.setIsBuy(transaction.getIsBuy());
			transactionDao.save(persistantTransaction);
			return new ApiResponse("Transaction done successfully....!");
		}
		throw new ApiResponseException("Invalid User Id or Car Id");
	}


	@Override
	public List<TransactionResponseDTO> getAllTransactions(Long userId) {
		if(userDao.existsById(userId)) {
			List<Transaction> transactions = transactionDao.findTransactionsByUserId(userId);
			List<TransactionResponseDTO> transactionList = new ArrayList<>();
			for(Transaction transaction:transactions) {
				TransactionResponseDTO persistantTransaction = mapper.map(transaction, TransactionResponseDTO.class);
				persistantTransaction.setCarNumber(transaction.getCar().getCarNumber());
				transactionList.add(persistantTransaction);
			}
			return transactionList;
		}
		throw new ApiResponseException("Invalid User Id");
	}


	@Override
	public List<MyOrdersResponseDTO> myOrders(Long userId) {
		if(userDao.existsById(userId)) {
			List<Transaction> transactions = transactionDao.findTransactionsByUserId(userId);
			List<MyOrdersResponseDTO> transactionList = new ArrayList<>();
			for(Transaction transaction:transactions) {
				if(transaction.getIsBuy() == true) {
					String carModelCompany = transaction.getCar().getCarModel().getCarModelCompany();
					String modelName = transaction.getCar().getCarModel().getModelName();
					String carSeriesName = transaction.getCar().getCarModel().getCarSeriesName();
					MyOrdersResponseDTO persistantTransaction = mapper.map(transaction, MyOrdersResponseDTO.class);
					persistantTransaction.setCarNumber(transaction.getCar().getCarNumber());
					persistantTransaction.setCarModelCompany(carModelCompany);
					persistantTransaction.setModelName(modelName);
					persistantTransaction.setCarSeriesName(carSeriesName);
					transactionList.add(persistantTransaction);
				}
			}
			return transactionList;
		}
		throw new ApiResponseException("Invalid User Id");
	}
	


}
