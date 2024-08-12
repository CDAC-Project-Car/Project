package com.sunbeam.service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.custom_exception.ApiResponseException;
import com.sunbeam.dao.CarDao;
import com.sunbeam.dao.CarModelDao;
import com.sunbeam.dao.ModelSpecificationDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CarModelRequestDTO;
import com.sunbeam.dto.CarRequestDTO;
import com.sunbeam.dto.CarDetailsResponseDTO;
import com.sunbeam.dto.CarBeforeEditResponseDTO;
import com.sunbeam.dto.CarCardResponseDTO;
import com.sunbeam.dto.ModelSpecificationRequestDTO;
import com.sunbeam.dto.UserForGetCarDetailsResponseDTO;
import com.sunbeam.entities.Car;
import com.sunbeam.entities.CarModel;
import com.sunbeam.entities.Image;
import com.sunbeam.entities.ModelSpecification;
import com.sunbeam.entities.User;

@Service
@Transactional
public class CarServiceImpl implements CarService {

	@Autowired
	private CarDao carDao;

	@Autowired
	private UserDao userDao;

	@Autowired
	private CarModelDao carModelDao;

	@Autowired
	private ModelSpecificationDao modelSpecificationDao;

	@Autowired
	private ImageHandlingService imageService;

	@Autowired
	private ModelMapper mapper;



	@Override
	public CarDetailsResponseDTO getCarDetails(Long carId) {

		Car car = carDao.findCarById(carId);
		if (car == null)
			throw new ApiResponseException("Car not found...!");

		if (car.getIsDeletedCar())
			throw new ApiResponseException("Car is deleted...!");

		CarDetailsResponseDTO persistantCar = mapper.map(car, CarDetailsResponseDTO.class);

		CarModelRequestDTO persistantCarModel = mapper.map(car.getCarModel(), CarModelRequestDTO.class);

		ModelSpecificationRequestDTO persistantModelSpecification = mapper.map(car.getModelSpecification(),
				ModelSpecificationRequestDTO.class);

		UserForGetCarDetailsResponseDTO persistantUser = mapper.map(car.getUser(),
				UserForGetCarDetailsResponseDTO.class);

		// not mapping nested hence
		persistantCar.setCarModelDetails(persistantCarModel);
		persistantCar.setModelSpecificationDetails(persistantModelSpecification);
		persistantCar.setUserDetails(persistantUser);

		return persistantCar;
	}

	@Override
	public CarBeforeEditResponseDTO beforeEditCarDetails(Long carId) {
		Car car = carDao.findById(carId).orElseThrow(() -> new ApiResponseException("Car not found...!"));

		ModelSpecificationRequestDTO persistantModelSpecification = mapper.map(car.getModelSpecification(),
				ModelSpecificationRequestDTO.class);

		if (car.getIsDeletedCar())
			throw new ApiResponseException("Car is deleted...!");
		CarBeforeEditResponseDTO persistantCar = mapper.map(car, CarBeforeEditResponseDTO.class);
		persistantCar.setModelSpecificationDetails(persistantModelSpecification);
		return persistantCar;
	}

	@Override
	public ApiResponse editCarDetails(CarBeforeEditResponseDTO editedCar) {
		Car car = mapper.map(editedCar, Car.class);
		ModelSpecification modelSpecification = mapper.map(editedCar.getModelSpecificationDetails(),
				ModelSpecification.class);
		modelSpecificationDao.save(modelSpecification);
		carDao.save(car);
		return new ApiResponse("Car details edited successfully...!");
	}

	@Override
	public ApiResponse addCar(CarRequestDTO carDto, MultipartFile[] images, MultipartFile coverImage)
			throws IOException {

		System.out.println(carDto);
		if (carDao.existsByCarNumber(carDto.getCarNumber()))
			throw new ApiResponseException("Car with same number already exists");

		User user = userDao.findById(carDto.getUserId()).orElseThrow(() -> new ApiResponseException("Invalid user id"));
		CarModel carModel = carModelDao.findById(carDto.getModelId())
				.orElseThrow(() -> new ApiResponseException("Invalid car modelid"));

		Car carEntity = mapper.map(carDto, Car.class);

		carEntity.setUser(user);
		carEntity.setCarModel(carModel);
		Image primaryImage = imageService.uploadCoverImage(coverImage);

		List<Image> imageList = imageService.uploadImages(images);
		imageList.add(primaryImage);

		for (Image image : imageList) {

			image.setCar(carEntity);

		}
		carEntity.setImages(imageList);

		carDao.save(carEntity);

		return new ApiResponse("Car added successfully ");
	}

	@Override
	public List<CarCardResponseDTO> getCarDetailsFilterByFuel(String fuel) {

		List<CarCardResponseDTO> carList = carDao.getCarListByFuelType(fuel);
		if(carList==null)
			throw new ApiResponseException("fueltype does not exist ");

		return carList;
	}

	

	@Override
	public List<CarCardResponseDTO> getCarDetailsFilterByLocation(String loacation) {
		 
		List<CarCardResponseDTO> carList = carDao.getCarListByLocation(loacation);
		if(carList==null)
			throw new ApiResponseException("No data found ");

		return carList;

		
	}

	@Override
	public List<CarCardResponseDTO> getCarDetailsFilterByBodyType(String bodyType) {
		 
		List<CarCardResponseDTO> carList = carDao.getCarListByBodyType(bodyType);
		if(carList==null)
			throw new ApiResponseException("No data found ");

		return carList;
	}

	@Override
	public List<CarCardResponseDTO> getCarDetailsFilterByBrand(String brand) {
		List<CarCardResponseDTO> carList = carDao.getCarListByBrand(brand);
		if(carList==null)
			throw new ApiResponseException("No data found ");

		return carList;
	}
	
	
	
	// Using  Derived Queries
	
	@Override
	public List<CarCardResponseDTO> getCarDetailsFilterByKmDriven(Long minKm, Long maxKm) {

		List<Car> carList = carDao.findByKmsDrivenBetween(minKm, maxKm);
		if(carList==null)
			throw new ApiResponseException("No data found ");

		// another way than custom query
		return carList.stream().map(car -> {
			CarCardResponseDTO dto = mapper.map(car, CarCardResponseDTO.class);
			dto.setCarModelCompany(car.getCarModel().getCarModelCompany());
			dto.setModelName(car.getCarModel().getModelName());
			dto.setCarSeriesName(car.getCarModel().getCarSeriesName());
			dto.setTransmission(car.getCarModel().getTransmission());
			String coverImage = imageService.getCoverImagePath(car.getImages());
			dto.setImage(coverImage);
			return dto;

		}).collect(Collectors.toList());

	}

	@Override
	public List<CarCardResponseDTO> getCarDetailsFilterByPriceRange(Long minPrice, Long maxPrice) {
		List<Car> carList = carDao.findByCarSellingPriceBetween(minPrice, maxPrice);
		if(carList==null)
			throw new ApiResponseException("No data found ");

		// another way than custom query
		return carList.stream().map(car -> {
			CarCardResponseDTO dto = mapper.map(car, CarCardResponseDTO.class);
			dto.setCarModelCompany(car.getCarModel().getCarModelCompany());
			dto.setModelName(car.getCarModel().getModelName());
			dto.setCarSeriesName(car.getCarModel().getCarSeriesName());
			dto.setTransmission(car.getCarModel().getTransmission());
			String coverImage = imageService.getCoverImagePath(car.getImages());
			dto.setImage(coverImage);
			return dto;

		}).collect(Collectors.toList());
	}
	
	

}
