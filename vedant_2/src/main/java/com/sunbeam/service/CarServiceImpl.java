package com.sunbeam.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.CarDao;

@Service
@Transactional
public class CarServiceImpl implements CarService {
	
	@Autowired
	private CarDao carDao;

}
