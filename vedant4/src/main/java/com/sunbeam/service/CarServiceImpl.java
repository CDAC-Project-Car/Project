package com.sunbeam.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sunbeam.custom_exception.ApiResponseException;
import com.sunbeam.dao.CarDao;
import com.sunbeam.dao.CarModelDao;
import com.sunbeam.dao.ModelSpecificationDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CarModelRequestDTO;
import com.sunbeam.dto.CarRequestDTO;
import com.sunbeam.dto.ListedCarsResponseDTO;
import com.sunbeam.dto.CarDetailsResponseDTO;
import com.sunbeam.dto.CarBeforeEditResponseDTO;
import com.sunbeam.dto.ModelSpecificationRequestDTO;
import com.sunbeam.dto.UserForGetCarDetailsResponseDTO;
import com.sunbeam.entities.Car;
import com.sunbeam.entities.CarModel;
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
	private ModelMapper mapper;

	@Override
	public ApiResponse addCar(CarRequestDTO car, Long userId, Long modelId) {
		
		User user = userDao.findById(userId).orElseThrow(()->new ApiResponseException("Invalid UserID!"));
		CarModel carModel = carModelDao.findById(modelId).orElseThrow(()->new ApiResponseException("Invalid car Model Id!"));
		if(carDao.existsByCarNumber(car.getCarNumber()))
			throw new ApiResponseException("Car with same number already exists");
		Car persistantCar = mapper.map(car, Car.class);
		persistantCar.setUser(user);
		persistantCar.setCarModel(carModel);
		carDao.save(persistantCar);
		return new ApiResponse("Car added successfully...!");
	}

	@Override
	public CarDetailsResponseDTO getCarDetails(Long carId) {
		Car car = carDao.findById(carId).orElseThrow(()-> new ApiResponseException("Car not found...!"));
		
		CarModelRequestDTO persistantCarModel = mapper.map(car.getCarModel(), CarModelRequestDTO.class);
		
		ModelSpecificationRequestDTO persistantModelSpecification = mapper.map(car.getModelSpecification(), ModelSpecificationRequestDTO.class);
		
		UserForGetCarDetailsResponseDTO persistantUser = mapper.map(car.getUser(), UserForGetCarDetailsResponseDTO.class);	
		
		if(car.getIsDeletedCar())
			throw new ApiResponseException("Car is deleted...!");
		CarDetailsResponseDTO persistantCar = mapper.map(car, CarDetailsResponseDTO.class);
		persistantCar.setCarModelDetails(persistantCarModel);
		persistantCar.setModelSpecificationDetails(persistantModelSpecification);
		persistantCar.setUserDetails(persistantUser);
		return persistantCar;
	}

	@Override
	public CarBeforeEditResponseDTO beforeEditCarDetails(Long carId) {
		Car car = carDao.findById(carId).orElseThrow(()-> new ApiResponseException("Car not found...!"));
		
		ModelSpecificationRequestDTO persistantModelSpecification = mapper.map(car.getModelSpecification(), ModelSpecificationRequestDTO.class);
		
		if(car.getIsDeletedCar())
			throw new ApiResponseException("Car is deleted...!");
		CarBeforeEditResponseDTO persistantCar = mapper.map(car, CarBeforeEditResponseDTO.class);
		persistantCar.setModelSpecificationDetails(persistantModelSpecification);
		return persistantCar;
	}

	@Override
	public ApiResponse editCarDetails(CarBeforeEditResponseDTO editedCar) {
			Car car = mapper.map(editedCar, Car.class);
			ModelSpecification modelSpecification = mapper.map(editedCar.getModelSpecificationDetails(), ModelSpecification.class);
			modelSpecificationDao.save(modelSpecification);
			carDao.save(car);
			return new ApiResponse("Car details edited successfully...!");
	}

	@Override
    public List<ListedCarsResponseDTO> listedCarsOfSeller(Long userId) {
        User user = userDao.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        List<Car> cars = carDao.findByUser(user);

        return cars.stream()
                   .map(car -> new ListedCarsResponseDTO(
                	   car.getCarModel().getCarModelCompany(),
                       car.getCarModel().getModelName(),
                       car.getCarModel().getCarSeriesName(),
                       car.getCarSellingPrice(),
                       car.getCarListingDate(),
                       car.getCarStatus()
                   ))
                   .collect(Collectors.toList());
    }
	
	 @Override
	    public List<CarDetailsResponseDTO> getCarDetailsByFilterKm(Long minKm, Long maxKm) {
	        List<Car> cars = carDao.findByKmsDrivenBetween(minKm, maxKm);
	        return cars.stream()
	                .map(car -> mapper.map(car, CarDetailsResponseDTO.class))
	                .collect(Collectors.toList());
	    }

	    @Override
	    public List<CarDetailsResponseDTO> getCarDetailsByFilterPrice(Long minPrice, Long maxPrice) {
	        List<Car> cars = carDao.findByCarSellingPriceBetween(minPrice, maxPrice);
	        return cars.stream()
	                .map(car -> mapper.map(car, CarDetailsResponseDTO.class))
	                .collect(Collectors.toList());
	    }

	    @Override
	    public List<CarDetailsResponseDTO> getCarDetailsByFilterFuel(String fuelType) {
	        List<Car> cars = carDao.findByCarModelFuelType(fuelType);
	        return cars.stream()
	                .map(car -> mapper.map(car, CarDetailsResponseDTO.class))
	                .collect(Collectors.toList());
	    }

	    @Override
	    public List<CarDetailsResponseDTO> getCarDetailsByFilterCompanyName(String carModelCompanyName) {
	        List<Car> cars = carDao.findByCarModelCarModelCompany(carModelCompanyName);
	        return cars.stream()
	                .map(car -> mapper.map(car, CarDetailsResponseDTO.class))
	                .collect(Collectors.toList());
	    }
}

	
	

