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
public class CarCompareResponseDTO {
	
	private String carModelCompany;
	private String modelName;
	private String carSeriesName;
	private String carModelType;
	private String transmission;
    private Long gearbox;
	private String frontBrakeType;
    private String rearBrakeType;
	private String drivetrain;
	private String emissionNorm;
    private Long fuelTankCapacity;
	private Long groundClearance;
	private String tyreType;
    private Long cargoVolume;
    private Long seatingCapacity;
	private Long engineDisplacement;
    private Long maxPower;
    private Long maxTorque;
	private Long noOfCylinders;
	private String fuelType;
	private Long length;
    private Long width;
    private Long height;
    private Long wheelBase;
    private Long grossWeight;  
}
