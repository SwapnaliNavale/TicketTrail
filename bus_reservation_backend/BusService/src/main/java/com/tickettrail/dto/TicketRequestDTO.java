package com.tickettrail.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TicketRequestDTO {
    private Long scheduleId;
    private Long userId;
    private int seatNo;
    private double price;
}

