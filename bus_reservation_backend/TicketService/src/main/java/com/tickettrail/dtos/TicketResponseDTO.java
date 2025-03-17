package com.tickettrail.dtos;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TicketResponseDTO {
    private Long id;
    private Long userId;
    private Long scheduleId;
    private Integer seatNo;
    private Double price;
    private LocalDateTime bookDate;
}
