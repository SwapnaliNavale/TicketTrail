package com.tickettrail.dto;

import java.time.LocalDate;

import jakarta.persistence.Column;

public class TicketRequestDTO extends BaseDTO {
	
	private LocalDate bookDate;
	
	private int seatNo;
	
	
	private double price;
	
	private boolean isBooked;
	
	
}
