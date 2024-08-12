package com.sunbeam.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.custom_exception.ApiResponseException;
import com.sunbeam.entities.Image;
import static org.apache.commons.io.FileUtils.*;

@Service
@Transactional
public class ImageHandlingImpl implements ImageHandlingService {

	@Value("${file.upload.location}")
	private String uploadFolder;

	@PostConstruct
	public void init() throws IOException {
		File folder = new File(uploadFolder);
		if (folder.exists()) {
			System.out.println("folder exists alrdy !");
		} else {
			folder.mkdir();
			System.out.println("created a folder !");
		}
	}

	@Override
	public List<Image> uploadImages(MultipartFile[] images) throws IOException {

		List<Image> imageList = new ArrayList<Image>();

		for (MultipartFile image : images) {
			String path = uploadFolder.concat(image.getOriginalFilename());
			writeByteArrayToFile(new File(path), image.getBytes());

			Image imageEntity = new Image();
			imageEntity.setImagePath(path);
			System.out.println(path);
			imageList.add(imageEntity);

		}

		return imageList;
	}

	@Override
	public Image uploadCoverImage(MultipartFile image) throws IOException {

		if (image == null || image.isEmpty()) {
			throw new ApiResponseException("Cover image cannot be null or empty");
		}

		Image coverImage = new Image();

		String path = uploadFolder.concat(image.getOriginalFilename());

		writeByteArrayToFile(new File(path), image.getBytes());

		coverImage.setImagePath(path);
		coverImage.setIsCoverImage(true);

		return coverImage;
	}

	@Override
	public String getCoverImagePath(List<Image> images) {
		return images.stream()
				.filter(Image::getIsCoverImage)
				.map(Image::getImagePath)
				.findAny()
				.orElse(null);
	}

}
