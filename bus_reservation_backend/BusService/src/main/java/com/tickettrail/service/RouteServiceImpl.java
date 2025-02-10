package com.tickettrail.service;

import com.tickettrail.dto.RouteRequestDTO;
import com.tickettrail.dto.RouteResponseDTO;
import com.tickettrail.entities.Route;
import com.tickettrail.repository.RouteRepository;
import org.modelmapper.ModelMapper;
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

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public RouteResponseDTO createRoute(RouteRequestDTO routeRequestDTO) {
        Route route = modelMapper.map(routeRequestDTO, Route.class);
        Route savedRoute = routeRepository.save(route);
        return modelMapper.map(savedRoute, RouteResponseDTO.class);
    }

    @Override
    public RouteResponseDTO getRouteById(Long id) {
        Route route = routeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Route not found with id: " + id));
        return modelMapper.map(route, RouteResponseDTO.class);
    }

    @Override
    public RouteResponseDTO updateRoute(Long id, RouteRequestDTO routeRequestDTO) {
        Route route = routeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Route not found with id: " + id));
        modelMapper.map(routeRequestDTO, route);
        Route updatedRoute = routeRepository.save(route);
        return modelMapper.map(updatedRoute, RouteResponseDTO.class);
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
                .map(route -> modelMapper.map(route, RouteResponseDTO.class))
                .collect(Collectors.toList());
    }
}
