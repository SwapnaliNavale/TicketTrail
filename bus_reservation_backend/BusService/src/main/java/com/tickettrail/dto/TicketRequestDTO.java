package com.tickettrail.dto;


import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TicketRequestDTO extends BaseDTO {
	
    private LocalDate bookDate = LocalDate.now();
    private int seatNo;
    private double price;
    private boolean isBooked;
    private Long scheduleId;
    private Long userId;
    private Long paymentId;
}


