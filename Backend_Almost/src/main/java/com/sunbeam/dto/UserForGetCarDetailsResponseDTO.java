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
public class UserForGetCarDetailsResponseDTO {
	
	private String userName;
	
	private String email;
	
	private String mobileNumber;
	
	private String userAddress;

}
