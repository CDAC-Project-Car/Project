package com.sunbeam.service;

import com.sunbeam.entities.EmailDetails;

public interface EmailService {

	String sendSimpleMail(EmailDetails details);

}
