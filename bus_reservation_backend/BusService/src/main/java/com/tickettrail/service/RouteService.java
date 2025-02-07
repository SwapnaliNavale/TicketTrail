package com.tickettrail.service;



import java.util.List;

import com.tickettrail.dto.RouteRequestDTO;
import com.tickettrail.dto.RouteResponseDTO;

public interface RouteService {
    RouteResponseDTO createRoute(RouteRequestDTO routeRequestDTO);
    RouteResponseDTO getRouteById(Long id);
    RouteResponseDTO updateRoute(Long id, RouteRequestDTO routeRequestDTO);
    void deleteRoute(Long id);
    List<RouteResponseDTO> getAllRoutes();
}

