package com.sunbeam.custom_exception;

public class ApiException extends RuntimeException{
	
	public ApiException(String msg)
	{
		super(msg);
	}
}