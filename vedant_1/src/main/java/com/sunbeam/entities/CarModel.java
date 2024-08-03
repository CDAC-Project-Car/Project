package com.sunbeam.entities;

import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class CarModel {
	
//	@OneToMany(mappedBy = "carModel")
//	private List<Car> car;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long carModelId;
	
	@NotBlank(message = "Car model company cannot be blank")
	@Size(max = 30, message = "Field should be less than 30 characters")
	private String carModelCompany;
	
	@NotBlank(message = "Model name cannot be blank")
	@Size(max = 30, message = "Field should be less than 30 characters")
	private String modelName;
    
	@NotBlank(message = "Car series name cannot be blank")
	@Size(max = 20, message = "Field should be less than 20 characters")
	private String carSeriesName;
	
	@NotBlank(message = "Car model type cannot be blank")
	@Size(max = 20, message = "Field should be less than 20 characters")
	private String carModelType;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(max = 10, message = "Field should be less than 10 characters")
	private String transmission;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, message = "No. of gears cannot be negative")
    private Long gearbox;
    
	@NotBlank(message = "Field cannot be blank")
	@Size(max = 10, message = "Field should be less than 10 characters")
	private String frontBrakeType;
    
	@NotBlank(message = "Field cannot be blank")
	@Size(max = 10, message = "Field should be less than 10 characters")
	private String rearBrakeType;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(max =20, message = "Field should be less than 20 characters")
	private String drivetrain;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(max = 20, message = "Field should be less than 20 characters")
	private String emissionNorm;

	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, message = "Fuel Tank capacity cannot be negative")
    private Long fuelTankCapacity;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, message = "Ground clearance cannot be negative")
    private Long groundClearance;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(max = 10, message = "Field should be less than 10 characters")
	private String tyreType;
    
	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, message = "cargo volume cannot be negative")
    private Long cargoVolume;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, max = 7, message = "Seating capacity should be between 1 to 7")
    private Long seatingCapacity;

	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, message = "Field cannot be negative")
    private Long engineDisplacement;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, message = "Power cannot be negative")
    private Long maxPower;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, message = "Torque cannot be negative")
    private Long maxTorque;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, message = "no. of cylinders cannot be negative")
    private Long noOfCylinders;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(max = 20, message = "Field should be less than 20 characters")
	private String fuelType;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, message = "length cannot be negative")
    private Long length;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, message = "width cannot be negative")
    private Long width;
	
	
	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, message = "height cannot be negative")
    private Long height;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, message = "wheelBase cannot be negative")
    private Long wheelBase;
	
	@NotBlank(message = "Field cannot be blank")
	@Size(min = 0, message = "grossWeight cannot be negative")
    private Long grossWeight;  

}
