package com.sunbeam.dto;

import java.time.LocalDateTime;

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
public class TransactionResponseDTO {
	
	private Long transactionId;

	private Integer transactionAmount;

	private String transactionType;

	private LocalDateTime transactionDate;
	
	private Boolean isBuy;

	private String carNumber;
}
