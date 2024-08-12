package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CarCardResponseDTO {

	private Long carId;

	private String carModelCompany;

	private String modelName;

	private String carSeriesName;
	
	private String transmission;

	private String rtoLocation;
	private Long carMfgYear;
	private Long kmsDriven;

	private Long carSellingPrice;
	
	private String image;
	
}
