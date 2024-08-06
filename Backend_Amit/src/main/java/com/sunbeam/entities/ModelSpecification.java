package com.sunbeam.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
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
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isPowerSteering;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isPowerWindows;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isAirConditioner;

	@NotNull(message = "Field cannot be blank")
	private Boolean isAdjustableHeadLights;
    
	@NotNull(message = "Field cannot be blank")
	private Boolean isFogLights;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isABS;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isBrakeAssist;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isMusicSystem;
    
	@NotNull(message = "Field cannot be blank")
	private Boolean isSpeakers;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isAdjustableSeats;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isCruiseControl;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isNavigationSystem;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isPowerAdjustableMirrors;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isSunroof;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isAirBags;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isSeatBelt;
	
	@NotNull(message = "Field cannot be blank")
	private Boolean isCentralLocking;

}
