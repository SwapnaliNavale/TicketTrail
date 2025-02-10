package com.tickettrail.dto;

import java.time.LocalTime;

import com.tickettrail.entities.Schedule;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

public class ScheduleResponseDTO {
    
	private Long id;
    private LocalTime departureTime;
    private LocalTime arrivalTime;
    private RouteResponseDTO route;
    private BusResponseDTO bus;
    
//    public ScheduleResponseDTO(ScheduleResponseDTO scheduleResponseDTO) {
//		this.id = scheduleResponseDTO.getId();
//		this.departureTime= scheduleResponseDTO.getDepartureTime();
//		this.arrivalTime = scheduleResponseDTO.getArrivalTime();
//		this.route = scheduleResponseDTO.getRoute();
//		this.bus = scheduleResponseDTO.getBus();
//	}
    

//    public ScheduleResponseDTO(ScheduleResponseDTO scheduleResponseDTO) {
//        this.id = scheduleResponseDTO.getId();
//        this.departureTime = scheduleResponseDTO.getDepartureTime();
//        this.arrivalTime = scheduleResponseDTO.getArrivalTime();
//        this.route = (scheduleResponseDTO.getRoute() != null) ? scheduleResponseDTO.getRoute().: null;
//        this.bus = (scheduleResponseDTO.getBus() != null) ? scheduleResponseDTO.getBus().getId() : null;
//    }
}


