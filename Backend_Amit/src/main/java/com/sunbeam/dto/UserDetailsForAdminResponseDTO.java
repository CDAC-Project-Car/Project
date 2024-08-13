package com.sunbeam.dto;

import java.time.LocalDate;

import com.sunbeam.entities.Role;

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
public class UserDetailsForAdminResponseDTO {
	
	private Long userId;
	
	private String userName;
	
	private String email;
	
	private String mobileNumber;
	
	private LocalDate dob;
	
	private String userAddress;
	
	private Role role;
	
	private Boolean isDeleted = false;

}
