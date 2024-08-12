package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class CarModelDeleteRequestDTO {

	private String carModelCompany;
	private String modelName;
	private String carSeriesName;
}
