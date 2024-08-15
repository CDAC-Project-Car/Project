package com.sunbeam.service;

import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sunbeam.custom_exception.ApiResponseException;
import com.sunbeam.dao.CarModelDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CarCompareResponseDTO;
import com.sunbeam.dto.CarModelDeleteRequestDTO;
import com.sunbeam.dto.CarModelRequestDTO;
import com.sunbeam.dto.CarModelResponseDTO;
import com.sunbeam.entities.CarModel;

@Service
@Transactional
public class CarModelServiceImpl implements CarModelService {
	
	@Autowired
	private CarModelDao carModelDao;
	
	@Autowired
	private ModelMapper mapper;


	@Override
	public List<String> getAllCarsByCompany() {
		List<String> carCompanies = carModelDao.findDistinctCompanies();
		return carCompanies;
		
	}
	
	@Override
	public List<String> getAllModelsByCompany(String company)
	{
		List<String> carModels = carModelDao.findModelsByComapny(company);
		return carModels;
		
	}

	@Override
	public List<CarModelResponseDTO> getAllVariantsByModel(String model) {
		List<CarModelResponseDTO> persistentVariants = carModelDao.findVariantsByModel(model);
		return persistentVariants;
	}

	@Override
	public List<CarCompareResponseDTO> compareCars(Long id1, Long id2) {
		CarModel persistantCar1 = carModelDao.findByCarModelId(id1);
		CarModel persistantCar2 = carModelDao.findByCarModelId(id2);
		List<CarCompareResponseDTO> cars = new ArrayList<>();
		cars.add(mapper.map(persistantCar1, CarCompareResponseDTO.class));
		cars.add(mapper.map(persistantCar2, CarCompareResponseDTO.class));
		return cars;
	}

	@Override
	public ApiResponse addCarModel(CarModelRequestDTO carModel) {
		if(carModelDao.existsByCarModelCompany(carModel.getCarModelCompany()) && carModelDao.existsByModelName(carModel.getModelName()) && carModelDao.existsByCarSeriesName(carModel.getCarSeriesName()))
			throw new ApiResponseException("Car Model already exists...!");
		CarModel persistantCarModel = mapper.map(carModel, CarModel.class);
		carModelDao.save(persistantCarModel);
		return new ApiResponse("Car Model added successfully...!");
	}

	@Override
	public ApiResponse deleteCarModel(CarModelDeleteRequestDTO carModel) {
		if(carModelDao.existsByCarModelCompany(carModel.getCarModelCompany()) && carModelDao.existsByModelName(carModel.getModelName()) && carModelDao.existsByCarSeriesName(carModel.getCarSeriesName()))
		{
			carModelDao.deleteByCarSeriesName(carModel.getCarSeriesName());
			return new ApiResponse("Car Model deleted successfully...!");	
		}		
		throw new ApiResponseException("Car Model already deleted...!");
	}

	@Override
	public CarModel beforeEditCarModel(Long carModelId) {
		if(carModelDao.existsById(carModelId))
		{
			CarModel persistantCarModel = carModelDao.findByCarModelId(carModelId);
			return persistantCarModel;	
		}		
		throw new ApiResponseException("Car Model doesn't exists...!");
	}

	@Override
	public ApiResponse editCarModel(CarModel carModel) {
		CarModel persistantCarModel = carModelDao.findByCarModelId(carModel.getCarModelId());
		mapper.map(carModel, persistantCarModel);
		carModelDao.save(persistantCarModel);
		return new ApiResponse("Car Model updated successfully...!");	
	}
		
}