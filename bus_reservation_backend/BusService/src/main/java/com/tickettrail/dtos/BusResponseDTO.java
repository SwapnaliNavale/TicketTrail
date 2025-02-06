package com.tickettrail.dtos;

import com.tickettrail.entities.Schedule;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BusResponseDTO {
    private Long id;
    private String busNo;
    private int capacity;
    private Long userId;
    private Schedule schedule;
}
