package com.tickettrail.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TicketResponseDTO {
    private Long id;
    private LocalDate bookDate;
    private int seatNo;
    private double price;
    private boolean isBooked;
    private Long scheduleId;
    private Long userId;
    private Long paymentId;
}

