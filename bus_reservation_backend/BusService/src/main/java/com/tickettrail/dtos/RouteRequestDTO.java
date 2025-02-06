package com.tickettrail.dtos;

import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RouteRequestDTO extends BaseDTO {
	
	private String source;
	
	private String destination;
	
	private Double distance;
	
	private LocalTime duration;
}
