package com.tickettrail.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
public class ScheduleRequestDTO {
    private LocalTime departureTime;
    private LocalTime arrivalTime;
    private Long routeId;
    private Long busId;
}
