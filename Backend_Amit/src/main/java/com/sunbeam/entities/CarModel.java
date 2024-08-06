package com.sunbeam.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="car_models")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CarModel {
	
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
	
	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "No. of gears cannot be negative")
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

	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "Fuel Tank capacity cannot be negative")
    private Long fuelTankCapacity;
	
	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "Ground clearance cannot be negative")
    private Long groundClearance;
	
	@NotBlank(message = "Field cannot be blank")
	@Max(value = 10, message = "Field should be less than 10 characters")
	private String tyreType;
    
	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "cargo volume cannot be negative")
    private Long cargoVolume;
	
	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "Seating capacity should be between 1 to 7")
	@Max(value = 7, message = "Seating capacity should be between 1 to 7")
    private Long seatingCapacity;

	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "Field cannot be negative")
    private Long engineDisplacement;
	
	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "Power cannot be negative")
    private Long maxPower;
	
	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "Torque cannot be negative")
    private Long maxTorque;
	
	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "no. of cylinders cannot be negative")
    private Long noOfCylinders;
	
	@NotBlank(message = "Field cannot be blank")
	@Max(value = 20, message = "Field should be less than 20 characters")
	private String fuelType;
	
	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "length cannot be negative")
    private Long length;
	
	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "width cannot be negative")
    private Long width;
	
	
	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "height cannot be negative")
    private Long height;
	
	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "wheelBase cannot be negative")
    private Long wheelBase;

	@NotNull(message = "Field cannot be blank")
	@Min(value = 0, message = "grossWeight cannot be negative")
    private Long grossWeight;  
	
//	@OneToMany(mappedBy = "carModel", cascade = CascadeType.ALL)
//	private List<Car> car;

}
