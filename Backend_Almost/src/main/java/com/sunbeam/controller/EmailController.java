package com.sunbeam.controller;


 


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.EmailDetails;
import com.sunbeam.service.EmailService;


@RestController
@CrossOrigin
public class EmailController {

	@Autowired private EmailService emailService;

	@PostMapping("/sendMail")
	public String
	sendMail(@RequestBody EmailDetails details)
	{
		String status
			= emailService.sendSimpleMail(details);

		return status;
	}

	 
}
