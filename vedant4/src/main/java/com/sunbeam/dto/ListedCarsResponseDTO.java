package com.sunbeam.dto;

import java.sql.Date;
import java.time.LocalDate;

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
		
	private LocalDate carListingDate;
	
	private Boolean carStatus;
}
