package com.tickettrail.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.tickettrail.dto.LocationRequestDTO;
import com.tickettrail.dto.LocationResponseDTO;
import com.tickettrail.entities.Location;
import com.tickettrail.repository.LocationRepository;

public class LocationServiceImpl implements LocationService {

	@Autowired
	private LocationRepository locationRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public LocationResponseDTO createLocation(LocationRequestDTO locationRequestDTO) {
		 Location location = modelMapper.map(locationRequestDTO, Location.class);
	        Location savedLocation = locationRepository.save(location);
	        return modelMapper.map(savedLocation, LocationResponseDTO.class);
	}

	@Override
	public LocationResponseDTO getLocationById(Long id) {
		Location location = locationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Location not found with id: " + id));
        return modelMapper.map(location, LocationResponseDTO.class);
	}

	@Override
	public List<LocationResponseDTO> getAllLocations() {
		List<Location> locations = locationRepository.findAll();
        return locations.stream()
                .map(location -> modelMapper.map(location, LocationResponseDTO.class))
                .collect(Collectors.toList());
	}

	@Override
	public LocationResponseDTO updateLocation(Long id, LocationRequestDTO locationRequestDTO) {
		Location location = locationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Location not found with id: " + id));

        location.setCity(locationRequestDTO.getCity());
        location.setState(locationRequestDTO.getState());
        location.setCountry(locationRequestDTO.getCountry());

        Location updatedLocation = locationRepository.save(location);
        return modelMapper.map(updatedLocation, LocationResponseDTO.class);
	}

	@Override
	public void deleteLocation(Long id) {
		 if (!locationRepository.existsById(id)) {
	            throw new RuntimeException("Location not found with id: " + id);
	        }
	        locationRepository.deleteById(id);
	    }

	}


