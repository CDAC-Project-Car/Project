package com.sunbeam.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManagerFactory;
import javax.transaction.Transactional;
import javax.validation.constraints.NotNull;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sunbeam.dao.CarModelDao;
import com.sunbeam.dto.CarModelResponseDTO;

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
		
}