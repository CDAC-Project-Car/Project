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
public class MyOrdersResponseDTO {

	private String carModelCompany;
	
	private String modelName;
		
	private String carSeriesName;
	
	private String carNumber;
	
	private Long transactionId;

	private Integer transactionAmount;

	private String transactionType;

	private LocalDateTime transactionDate;
	
}
