package com.sunbeam.entities;


import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="reviews")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Review {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long reviewId;
	
	@NotNull(message="rating cannot be blank")
	@Max(value=5,message="Rating must be less than 5")
	@Min(value=0,message="Rating must be greater than 0")
	private Long rating;
	
	@NotBlank(message="Review Text cannot be blank")
	@Size(max=200,message="Review Text must be less than 200 characters")
	private String reviewText;
	
	@Column(updatable = false)
	private LocalDateTime reviewDate;
	
	@ManyToOne
	@JoinColumn(name = "user_id_fk")
	private User user;
	
	@ManyToOne
	@JoinColumn(name="car_model_id_fk")
	private CarModel carModel;

}
