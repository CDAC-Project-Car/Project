package com.sunbeam.dto;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ReviewResponseDTO {

	private Long rating;

	private String reviewText;

	private LocalDateTime reviewDate;
	
	private String userName;

}
