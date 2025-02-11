package com.tickettrail.dto;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonFormat;

@Getter
@NoArgsConstructor
public class RouteRequestDTO {

    @NotBlank(message = "Source is required")
    private String source;

    @NotBlank(message = "Destination is required")
    private String destination;

    @NotNull(message = "Distance is required")
    private Long distance;

    @NotNull(message = "Duration is required")
    
    @JsonFormat(pattern = "HH:mm:ss")  // Ensures JSON output is in correct format

    private LocalTime duration;

    // Constructor that converts numeric duration into LocalTime
    public RouteRequestDTO(String source, String destination, Long distance, int durationHours) {
        this.source = source;
        this.destination = destination;
        this.distance = distance;
        this.duration = LocalTime.of(durationHours, 0); // Converts "2" → "02:00:00"
    }
}
