package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.entities.Transaction;

public interface TransactionDao extends JpaRepository<Transaction, Long> {

	@Query("SELECT t FROM Transaction t WHERE  t.user.id = :id")
	List<Transaction> findTransactionsByUserId(Long id);

}
