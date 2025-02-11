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
import com.tickettrail.dto.BusRequestDTO;
import com.tickettrail.dto.BusResponseDTO;
import com.tickettrail.service.BusService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/buses")
@RequiredArgsConstructor
public class BusController {
	@Autowired
    private BusService busService;

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<String>> addBus(@RequestBody BusRequestDTO requestDTO) {
        busService.addBus(requestDTO);
        return ResponseEntity.ok(new ApiResponse<>("success", "Bus added successfully"));
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<BusResponseDTO>> getBus(@PathVariable Long id) {
    	return ResponseEntity.ok(ApiResponse.success(busService.getBus(id)));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<String>> updateBus(@PathVariable Long id, @RequestBody BusRequestDTO requestDTO) {
        busService.updateBus(id, requestDTO);
        return ResponseEntity.ok(new ApiResponse<>("success", "Bus updated successfully"));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<String>> deleteBus(@PathVariable Long id) {
        busService.deleteBus(id);
        return ResponseEntity.ok(new ApiResponse<>("success", "Bus deleted successfully"));
    }
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<List<BusResponseDTO>>> getAllBuses() {
        return ResponseEntity.ok(ApiResponse.success(busService.getALLBuses()));
    }
}

