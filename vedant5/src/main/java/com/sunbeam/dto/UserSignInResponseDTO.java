package com.sunbeam.dto;

import com.sunbeam.entities.Role;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserSignInResponseDTO {
	
	private Long userId;
	
	private String userName;
	
	
}
