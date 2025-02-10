package com.tickettrail.dto;

import com.tickettrail.entities.Schedule;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RouteResponseDTO {

    private Long id;
    private String source;
    private String destination;
    private Long distance;
    private String duration;
    
}

