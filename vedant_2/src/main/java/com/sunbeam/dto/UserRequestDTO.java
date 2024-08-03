package com.sunbeam.dto;

import javax.validation.constraints.NotBlank;

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
public class UserRequestDTO {
	@NotBlank(message = "Email cannot be blank")
	String email;
	
	@NotBlank(message = "Password cannot be blank")
	String password;

}
