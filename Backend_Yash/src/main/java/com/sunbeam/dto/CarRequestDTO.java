package com.sunbeam.dto;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.sunbeam.entities.ModelSpecification;

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
public class CarRequestDTO {
	
	// try-error for id 
	
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long userId;
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long modelId;
  
	private String carNumber;
	
	private Boolean isInsurance;

	private String rtoLocation;

    private String carOwnership;

	private Long carMfgYear;

    private Long kmsDriven;

    private Long carMilage;

	private String carColor;

    private Boolean carStatus;

	private Long carSellingPrice;
	
	// removing this (as using json property)
//	private ModelSpecificationRequestDTO modelSpecification;

//	@JsonProperty("modelSpecification")
	ModelSpecification modelSpecification;
	
//	private MultipartFile [] images;
	
}
