package com.tickettrail.service;

import com.tickettrail.dto.RouteRequestDTO;
import com.tickettrail.dto.RouteResponseDTO;
import com.tickettrail.entities.Location;
import com.tickettrail.entities.Route;
import com.tickettrail.repository.LocationRepository;
import com.tickettrail.repository.RouteRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

//@Service
//@Transactional
//public class RouteServiceImpl implements RouteService {
//
//    @Autowired
//    private RouteRepository routeRepository;
//
//    @Autowired
//    private ModelMapper modelMapper;
//
//    @Override
//    public RouteResponseDTO createRoute(RouteRequestDTO routeRequestDTO) {
//        Route route = modelMapper.map(routeRequestDTO, Route.class);
//        Route savedRoute = routeRepository.save(route);
//        return modelMapper.map(savedRoute, RouteResponseDTO.class);
//    }
//
//    @Override
//    public RouteResponseDTO getRouteById(Long id) {
//        Route route = routeRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Route not found with id: " + id));
//        return modelMapper.map(route, RouteResponseDTO.class);
//    }
//
//    @Override
//    public RouteResponseDTO updateRoute(Long id, RouteRequestDTO routeRequestDTO) {
//        Route route = routeRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Route not found with id: " + id));
//        modelMapper.map(routeRequestDTO, route);
//        Route updatedRoute = routeRepository.save(route);
//        return modelMapper.map(updatedRoute, RouteResponseDTO.class);
//    }
//
//    @Override
//    public void deleteRoute(Long id) {
//        if (!routeRepository.existsById(id)) {
//            throw new RuntimeException("Route not found with id: " + id);
//        }
//        routeRepository.deleteById(id);
//    }
//
//    @Override
//    public List<RouteResponseDTO> getAllRoutes() {
//        List<Route> routes = routeRepository.findAll();
//        return routes.stream()
//                .map(route -> modelMapper.map(route, RouteResponseDTO.class))
//                .collect(Collectors.toList());
//    }
//}

@Service
@Transactional
public class RouteServiceImpl implements RouteService {

    @Autowired
    private RouteRepository routeRepository;

    @Autowired
    private LocationRepository locationRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public RouteResponseDTO createRoute(RouteRequestDTO routeRequestDTO) {
        // 🔹 Fetch start and end locations
        Location startLocation = locationRepository.findById(routeRequestDTO.getStartLocationId())
                .orElseThrow(() -> new RuntimeException("Start location not found"));

        Location endLocation = locationRepository.findById(routeRequestDTO.getEndLocationId())
                .orElseThrow(() -> new RuntimeException("End location not found"));

        // 🔹 Map the request DTO to Route entity
        Route route = modelMapper.map(routeRequestDTO, Route.class);
        route.setStartLocation(startLocation);
        route.setEndLocation(endLocation);

        Route savedRoute = routeRepository.save(route);

        // 🔹 Convert to DTO and return
        return new RouteResponseDTO(
                savedRoute.getId(),
                savedRoute.getStartLocation().getCity(),
                savedRoute.getEndLocation().getCity(),
                savedRoute.getDistance(),
                savedRoute.getDuration().toString()
        );
    }

    @Override
    public RouteResponseDTO getRouteById(Long id) {
        Route route = routeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Route not found with id: " + id));

        return new RouteResponseDTO(
                route.getId(),
                route.getStartLocation().getCity(),
                route.getEndLocation().getCity(),
                route.getDistance(),
                route.getDuration().toString()
        );
    }

    @Override
    public RouteResponseDTO updateRoute(Long id, RouteRequestDTO routeRequestDTO) {
        Route route = routeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Route not found with id: " + id));

        // 🔹 Fetch and set start and end locations
        Location startLocation = locationRepository.findById(routeRequestDTO.getStartLocationId())
                .orElseThrow(() -> new RuntimeException("Start location not found"));

        Location endLocation = locationRepository.findById(routeRequestDTO.getEndLocationId())
                .orElseThrow(() -> new RuntimeException("End location not found"));

        route.setStartLocation(startLocation);
        route.setEndLocation(endLocation);
        route.setDistance(routeRequestDTO.getDistance());
        route.setDuration(routeRequestDTO.getDuration());

        Route updatedRoute = routeRepository.save(route);

        return new RouteResponseDTO(
                updatedRoute.getId(),
                updatedRoute.getStartLocation().getCity(),
                updatedRoute.getEndLocation().getCity(),
                updatedRoute.getDistance(),
                updatedRoute.getDuration().toString()
        );
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
        return routeRepository.findAll().stream()
                .map(route -> new RouteResponseDTO(
                        route.getId(),
                        route.getStartLocation().getCity(),
                        route.getEndLocation().getCity(),
                        route.getDistance(),
                        route.getDuration().toString()))
                .collect(Collectors.toList());
    }
}
