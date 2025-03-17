package com.tickettrail.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;

//@Getter
//public class RouteRequestDTO {
//
//    @NotBlank(message = "Source is required")
//    private String source;
//
//    @NotBlank(message = "Destination is required")
//    private String destination;
//
//    @NotNull(message = "Distance is required")
//    private Long distance;
//
//    @NotNull(message = "Duration is required")
////    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm:ss") // Ensures correct JSON format
////    private LocalTime duration;
//    @JsonFormat(pattern = "HH:mm:ss")
//    private LocalTime duration;
//
//    public RouteRequestDTO(String source, String destination, Long distance, LocalTime duration) {
//        this.source = source;
//        this.destination = destination;
//        this.distance = distance;
//        this.duration = duration;
//    }
//
//   
//}

@Getter
@Setter
public class RouteRequestDTO {

    @NotNull(message = "Start location ID is required")
    private Long startLocationId;

    @NotNull(message = "End location ID is required")
    private Long endLocationId;

    @NotNull(message = "Distance is required")
    private Long distance;

    @NotNull(message = "Duration is required")
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime duration;

    public RouteRequestDTO(Long startLocationId, Long endLocationId, Long distance, LocalTime duration) {
        this.startLocationId = startLocationId;
        this.endLocationId = endLocationId;
        this.distance = distance;
        this.duration = duration;
    }
}