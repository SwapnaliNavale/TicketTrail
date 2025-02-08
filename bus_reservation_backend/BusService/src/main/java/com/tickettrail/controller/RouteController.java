package com.tickettrail.controller;

import com.tickettrail.dto.ApiResponse;
import com.tickettrail.dto.RouteRequestDTO;
import com.tickettrail.dto.RouteResponseDTO;
import com.tickettrail.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/routes")
public class RouteController {

    @Autowired
    private RouteService routeService;

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<RouteResponseDTO>> createRoute(@RequestBody RouteRequestDTO dto) {
        return ResponseEntity.ok(ApiResponse.success(routeService.createRoute(dto), "Route created successfully"));
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<RouteResponseDTO>> getRouteById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(routeService.getRouteById(id)));
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<List<RouteResponseDTO>>> getAllRoutes() {
        return ResponseEntity.ok(ApiResponse.success(routeService.getAllRoutes()));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<String>> updateRoute(@PathVariable Long id, @RequestBody RouteRequestDTO dto) {
        routeService.updateRoute(id, dto);
        return ResponseEntity.ok(ApiResponse.success("Route updated successfully"));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<String>> deleteRoute(@PathVariable Long id) {
        routeService.deleteRoute(id);
        return ResponseEntity.ok(ApiResponse.success("Route deleted successfully"));
    }
}
