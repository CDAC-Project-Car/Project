package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class User extends BaseEntity {

	@NotBlank(message="Name cannot be blank")
	@Size(max=40,message="Name must be less than 40 characters")
	private String name;
	
	@NotBlank(message="Email cannot be blank")
	@Email(message="Email should be valid")
	@Size(max=50,message="Email must be less than 50 characters")
	@Column(unique=true)
	private String email;
	
	@NotBlank(message="Password cannot be blank")
	@Size(min=8,max=20,message="Password should be more than 8 and less than 20 characters ")
	private String password;
	
	@NotBlank(message="Mobile Number cannot be blank")
	@Size(max=12,message="Number cannot be more than 12 numbers")
	private String mobileNumber;
	
	@NotBlank(message="Password cannot be blank")
	@Size(max=100,message="Address should be less than 100 characters")
	private String address;
	
	@Enumerated(EnumType.STRING)
	@Column(length=10,nullable=false)
	private Role role;
}
