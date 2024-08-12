package com.sunbeam.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

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
public class ModelSpecificationRequestDTO {
	
//	@JsonProperty(access = Access.WRITE_ONLY)
//	private Long modelSpecificationId;
	
	private Boolean isPowerSteering;
	
	private Boolean isPowerWindows;
	
	private Boolean isAirConditioner;

	private Boolean isAdjustableHeadLights;
    
	private Boolean isFogLights;
	
	private Boolean isABS;
	
	private Boolean isBrakeAssist;
	
	private Boolean isMusicSystem;
    
	private Boolean isSpeakers;
	
	private Boolean isAdjustableSeats;
	
	private Boolean isCruiseControl;
	
	private Boolean isNavigationSystem;
	
	private Boolean isPowerAdjustableMirrors;
	
	private Boolean isSunroof;
	
	private Boolean isAirBags;
	
	private Boolean isSeatBelt;
	
	private Boolean isCentralLocking;

}
