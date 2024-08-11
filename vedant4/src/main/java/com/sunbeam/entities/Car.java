package com.sunbeam.entities;


import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
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
@Table(name="cars")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = "cart")
public class Car{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long carId;
    
	@NotBlank(message = "Car number cannot be blank")
	@Column(unique = true)
	@Size(max = 13, message = "Car number should be less than 13 characters")
    private String carNumber;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isInsurance;
	
	@NotBlank(message = "RTO location cannot be blank")
	@Size(max = 20, message = "RTO location should be less than 20 characters")
	private String rtoLocation;
	
	@NotBlank(message = "Car ownership cannot be blank")
	@Size(max = 20, message = "Car ownership should be less than 20 characters")
    private String carOwnership;
	
	@NotNull(message = "Car mfg year cannot be blank")
	@Min(value = 1994, message = "Car mfg before 1994 cannot be registered")
	private Long carMfgYear;
    
	@NotNull(message = "kms driven year cannot be blank")
	@Min(value = 0, message = "kms cannot be negative")
    private Long kmsDriven;
	
	@NotNull(message = "car milage cannot be blank")
	@Min(value = 0, message = "car milage cannot be negative")
    private Long carMilage;
	
	@NotBlank(message = "Car color cannot be blank")
	@Size(max = 10, message = "Car color should be less than 10 characters")
	private String carColor;
	
	@NotNull(message = "Field cannot be blank")
    private Boolean carStatus;
	
	@NotNull(message = "Field cannot be blank")
	@Column(nullable = false)
    private Boolean isDeletedCar = false;
	
	@NotNull(message = "car selling price cannot be blank")
	@Min(value = 0, message = "car selling price cannot be negative")
	private Long carSellingPrice;
	
	//@NotNull(message="Listing Date cannot be blank")
	private LocalDate carListingDate;
	
	@ManyToOne
	@JoinColumn(name = "car_model_id_fk")
	private CarModel carModel;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "model_specification_id_fk")
	private ModelSpecification modelSpecification;
	
	@ManyToOne
	@JoinColumn(name = "user_id_fk")
	private User user;	
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="cart_id")
	private Cart cart;

}
