package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "images")
@Getter
@Setter
//@ToString // causing recursion issue in bi-directional relation
@AllArgsConstructor
@NoArgsConstructor
public class Image {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Long imageId;

	@Column(nullable = false, length = 150)
	private String imagePath;
	
	private Boolean isCoverImage=false;
	
	@ManyToOne
	@JoinColumn(name = "car_id",nullable = false)
	private Car car;
	

}
