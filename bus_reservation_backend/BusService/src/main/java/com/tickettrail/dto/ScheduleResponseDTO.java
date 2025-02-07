package com.tickettrail.dto;

import com.tickettrail.entities.Schedule;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
public class ScheduleResponseDTO {
    private Long id;
    private LocalTime departureTime;
    private LocalTime arrivalTime;
    private Long routeId;
    private Long busId;

    public ScheduleResponseDTO(Schedule schedule) {
        this.id = schedule.getId();
        this.departureTime = schedule.getDepartureTime();
        this.arrivalTime = schedule.getArrivalTime();
        this.routeId = (schedule.getRoute() != null) ? schedule.getRoute().getId() : null;
        this.busId = (schedule.getBus() != null) ? schedule.getBus().getId() : null;
    }
}


