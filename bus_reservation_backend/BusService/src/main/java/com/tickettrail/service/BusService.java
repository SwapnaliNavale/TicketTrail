package com.tickettrail.service;

import java.util.List;

import com.tickettrail.dto.BusRequestDTO;
import com.tickettrail.dto.BusResponseDTO;


public interface BusService {
    void addBus(BusRequestDTO requestDTO);
    BusResponseDTO getBus(Long id);
    void updateBus(Long id, BusRequestDTO requestDTO);
    void deleteBus(Long id);
	List<BusResponseDTO> getALLBuses();
}
