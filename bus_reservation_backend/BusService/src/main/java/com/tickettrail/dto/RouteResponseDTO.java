package com.tickettrail.dto;

import lombok.Getter;

@Getter
public class RouteResponseDTO {

    private Long id;
    private String source;
    private String destination;
    private Long distance;
    private String duration;

    public RouteResponseDTO(Long id, String source, String destination, Long distance, String duration) {
        this.id = id;
        this.source = source;
        this.destination = destination;
        this.distance = distance;
        this.duration = duration;
    }

    
}

