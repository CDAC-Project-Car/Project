package com.sunbeam.entities;

import java.time.LocalDateTime;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="transactions")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Transaction {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long transactionId;
	
	//@NotNull(message="Transaction Amount cannot be blank")
	//@Min(value=0,message="Transaction Amount must be greater than 0")
	private Integer transactionAmount = 500;
	
	@NotBlank(message="Transaction Type cannot be blank")
	@Size(max=20,message="Transaction Type must be less than 20 characters")
	private String transactionType;
	
	@Column(updatable = false)
	private LocalDateTime transactionDate;
	
	@NotNull(message = "Field cannot be empty")
	private Boolean isBuy = false;
	
	@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
	@JoinColumn(name = "car_id_fk")
	private Car car;
	
	@ManyToOne
	@JoinColumn(name="user_id_fk")
	private User user;

}
