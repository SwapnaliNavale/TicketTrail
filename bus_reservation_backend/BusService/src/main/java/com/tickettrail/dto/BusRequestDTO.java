package com.tickettrail.dto;

import com.tickettrail.entities.Schedule;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class BusRequestDTO {
    private String busNo;
    private int capacity;
    private Long userId;
    private Schedule schedule;
}
