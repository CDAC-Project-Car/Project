package com.sunbeam.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ApiResponse {
	
	
	private String message;
	//private LocalDateTime timeStamp;

	public ApiResponse(String message) {
		super();
		this.message = message;
		//this.timeStamp = LocalDateTime.now();
	}

}

