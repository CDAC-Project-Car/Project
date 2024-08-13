package com.sunbeam.dto;

import java.time.LocalDate;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserResponseDTO {
	
	private Long userId;
	
	private String userName;
	
	private String mobileNumber;
	
	private LocalDate dob;
	
	private String userAddress;
	
}
