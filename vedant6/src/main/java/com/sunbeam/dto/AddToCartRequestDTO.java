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
public class AddToCartRequestDTO {

		private String carModelCompany;
		
		private String modelName;
		
		private Long carSellingPrice;
	
	
}