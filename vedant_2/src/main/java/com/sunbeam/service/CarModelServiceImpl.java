package com.sunbeam.service;

import java.util.List;

import javax.persistence.EntityManagerFactory;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sunbeam.dao.CarModelDao;

@Service
@Transactional
public class CarModelServiceImpl implements CarModelService {
	
	@Autowired
	private CarModelDao carModelDao;
	
	@Autowired
	private EntityManagerFactory entityManager;


	@Override
	public List<String> getAllCarsByCompany() {
		List<String> carCompanies = carModelDao.findDistinctCompanies();
		return carCompanies;
		
	}
		
}