package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class TransactionRequestDTO {
	
	private String transactionType;
	
	private Boolean isBuy = false;
	
	private Long carId;
	
	private Long userId;

}
