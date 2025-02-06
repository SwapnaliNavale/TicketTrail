package com.tickettrail.controller;

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

import com.tickettrail.dtos.ApiResponse;
import com.tickettrail.dtos.BusRequestDTO;
import com.tickettrail.dtos.BusResponseDTO;
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
        return ResponseEntity.ok(new ApiResponse<>("Bus added successfully", "SUCCESS"));
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<BusResponseDTO>> getBus(@PathVariable Long id) {
        return ResponseEntity.ok(new ApiResponse<>(busService.getBus(id), "SUCCESS"));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<String>> updateBus(@PathVariable Long id, @RequestBody BusRequestDTO requestDTO) {
        busService.updateBus(id, requestDTO);
        return ResponseEntity.ok(new ApiResponse<>("Bus updated successfully", "SUCCESS"));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<String>> deleteBus(@PathVariable Long id) {
        busService.deleteBus(id);
        return ResponseEntity.ok(new ApiResponse<>("Bus deleted successfully", "SUCCESS"));
    }
}

