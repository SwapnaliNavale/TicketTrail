package com.tickettrail.dtos;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
public class RouteResponseDTO {
	
	private Long id;
	private LocalDate createdOn;
	private LocalDateTime updatedOn;
	
	private String source;
	
	private String destination;
	
	private Double distance;
	
	private LocalTime duration;
	
}
