package com.sunbeam.dto;

import com.sunbeam.entities.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class UserSignInResponseDTO {
	
	
	private String jwt;
	private String mesg;
	
	
}
