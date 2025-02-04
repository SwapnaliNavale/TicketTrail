package com.bus.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//DTO :  resp DTO : to send API resp from rest server ---> rest clnt
@NoArgsConstructor
@Getter
@Setter
public class ApiResponse {
	private LocalDateTime timeStamp;
	private String status;
	private String message;
	public ApiResponse(String message, String status) {
		super();
		this.status= status;
		this.message = message;
		this.timeStamp=LocalDateTime.now();
	}
	
}