package com.sunbeam.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name="model_specification")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ModelSpecification {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long modelSpecificationId;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isPowerSteering;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isPowerWindows;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isAirConditioner;

	@NotBlank(message = "Field cannot be blank")
	private Boolean isAdjustableHeadLights;
    
	@NotBlank(message = "Field cannot be blank")
	private Boolean isFogLights;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isABS;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isBrakeAssist;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isMusicSystem;
    
	@NotBlank(message = "Field cannot be blank")
	private Boolean isSpeakers;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isAdjustableSeats;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isCruiseControl;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isNavigationSystem;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isPowerAdjustableMirrors;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isSunroof;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isAirBags;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isSeatBelt;
	
	@NotBlank(message = "Field cannot be blank")
	private Boolean isCentralLocking;

}
