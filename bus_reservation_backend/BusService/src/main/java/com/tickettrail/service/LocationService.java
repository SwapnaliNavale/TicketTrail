package com.tickettrail.service;

import java.util.List;

import com.tickettrail.dto.LocationRequestDTO;
import com.tickettrail.dto.LocationResponseDTO;

public interface LocationService {
    LocationResponseDTO createLocation(LocationRequestDTO locationRequestDTO);
    LocationResponseDTO getLocationById(Long id);
    List<LocationResponseDTO> getAllLocations();
    LocationResponseDTO updateLocation(Long id, LocationRequestDTO locationRequestDTO);
    void deleteLocation(Long id);
}
