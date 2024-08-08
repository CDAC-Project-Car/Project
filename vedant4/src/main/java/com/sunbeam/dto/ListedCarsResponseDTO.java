package com.sunbeam.dto;

import java.sql.Date;

import javax.validation.constraints.NotBlank;

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
public class ListedCarsResponseDTO {

	private String carModelCompany;
	
	private String modelName;
		
	private String carSeriesName;
		
	private Long carSellingPrice;
		
	private Date carListingDate;
	
	private Boolean carStatus;
}
