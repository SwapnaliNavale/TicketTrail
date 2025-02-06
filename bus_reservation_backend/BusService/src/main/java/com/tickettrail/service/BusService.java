package com.tickettrail.service;

import com.tickettrail.dtos.BusRequestDTO;
import com.tickettrail.dtos.BusResponseDTO;


public interface BusService {
    void addBus(BusRequestDTO requestDTO);
    BusResponseDTO getBus(Long id);
    void updateBus(Long id, BusRequestDTO requestDTO);
    void deleteBus(Long id);
}
