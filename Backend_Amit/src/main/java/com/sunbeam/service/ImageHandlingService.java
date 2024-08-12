package com.sunbeam.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.entities.Image;

public interface ImageHandlingService {
	
	List<Image> uploadImages(MultipartFile [] images) throws IOException;
	Image uploadCoverImage(MultipartFile image) throws IOException;
	
	String getCoverImagePath(List<Image> images);

}
