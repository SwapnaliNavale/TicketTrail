package com.tickettrail.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tickettrail.dto.ApiResponse;
import com.tickettrail.dto.LocationRequestDTO;
import com.tickettrail.dto.LocationResponseDTO;
import com.tickettrail.service.LocationService;

@RestController
@RequestMapping("/locations")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<LocationResponseDTO>> createLocation(@RequestBody LocationRequestDTO dto) {
        return ResponseEntity.ok(ApiResponse.success(locationService.createLocation(dto), "Location created successfully"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<LocationResponseDTO>> getLocationById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(locationService.getLocationById(id)));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<LocationResponseDTO>>> getAllLocations() {
        return ResponseEntity.ok(ApiResponse.success(locationService.getAllLocations()));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<String>> updateLocation(@PathVariable Long id, @RequestBody LocationRequestDTO dto) {
        locationService.updateLocation(id, dto);
        return ResponseEntity.ok(ApiResponse.success("Location updated successfully"));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<String>> deleteLocation(@PathVariable Long id) {
        locationService.deleteLocation(id);
        return ResponseEntity.ok(ApiResponse.success("Location deleted successfully"));
    }
}
