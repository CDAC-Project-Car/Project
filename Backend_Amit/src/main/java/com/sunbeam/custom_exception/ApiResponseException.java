package com.sunbeam.custom_exception;

public class ApiResponseException extends RuntimeException{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ApiResponseException(String message)
	{
		super(message);
	}
}
