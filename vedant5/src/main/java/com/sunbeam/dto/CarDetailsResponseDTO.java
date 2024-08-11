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
public class CarDetailsResponseDTO {
	
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
	
	private CarModelRequestDTO carModelDetails;
	
	private ModelSpecificationRequestDTO modelSpecificationDetails;
	
	private UserForGetCarDetailsResponseDTO userDetails;

}
