package com.tickettrail.service;



import com.tickettrail.dto.RouteRequestDTO;
import com.tickettrail.dto.RouteResponseDTO;
import com.tickettrail.entities.Route;
import com.tickettrail.repository.RouteRepository;
import com.tickettrail.service.RouteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class RouteServiceImpl implements RouteService {

    @Autowired
    private RouteRepository routeRepository;

    @Override
    public RouteResponseDTO createRoute(RouteRequestDTO routeRequestDTO) {
        Route route = new Route(routeRequestDTO.getSource(), routeRequestDTO.getDestination(),
                routeRequestDTO.getDistance(), routeRequestDTO.getDuration());
        Route savedRoute = routeRepository.save(route);
        return new RouteResponseDTO(savedRoute.getId(), savedRoute.getSource(), savedRoute.getDestination(),
                savedRoute.getDistance(), savedRoute.getDuration().toString());
    }

    @Override
    public RouteResponseDTO getRouteById(Long id) {
        Route route = routeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Route not found with id: " + id));
        return new RouteResponseDTO(route.getId(), route.getSource(), route.getDestination(),
                route.getDistance(), route.getDuration().toString());
    }

    @Override
    public RouteResponseDTO updateRoute(Long id, RouteRequestDTO routeRequestDTO) {
        Route route = routeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Route not found with id: " + id));

        route.setSource(routeRequestDTO.getSource());
        route.setDestination(routeRequestDTO.getDestination());
        route.setDistance(routeRequestDTO.getDistance());
        route.setDuration(routeRequestDTO.getDuration());

        Route updatedRoute = routeRepository.save(route);
        return new RouteResponseDTO(updatedRoute.getId(), updatedRoute.getSource(), updatedRoute.getDestination(),
                updatedRoute.getDistance(), updatedRoute.getDuration().toString());
    }

    @Override
    public void deleteRoute(Long id) {
        if (!routeRepository.existsById(id)) {
            throw new RuntimeException("Route not found with id: " + id);
        }
        routeRepository.deleteById(id);
    }

    @Override
    public List<RouteResponseDTO> getAllRoutes() {
        List<Route> routes = routeRepository.findAll();
        return routes.stream()
                .map(route -> new RouteResponseDTO(route.getId(), route.getSource(), route.getDestination(),
                        route.getDistance(), route.getDuration().toString()))
                .collect(Collectors.toList());
    }
}

