package com.tickettrail.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tickettrail.dto.BusRequestDTO;
import com.tickettrail.dto.BusResponseDTO;
import com.tickettrail.entities.Bus;
import com.tickettrail.repository.BusRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class BusServiceImpl implements BusService {

    @Autowired
    private BusRepository busRepository;

    @Autowired
    private ModelMapper modelMapper;  // Inject ModelMapper

    @Override
    public void addBus(BusRequestDTO requestDTO) {
        Bus bus = modelMapper.map(requestDTO, Bus.class);
        busRepository.save(bus);
    }

    @Override
    public BusResponseDTO getBus(Long id) {
        Bus bus = busRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bus not found"));
        return modelMapper.map(bus, BusResponseDTO.class);
    }

    @Override
    public void updateBus(Long id, BusRequestDTO requestDTO) {
        Bus bus = busRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bus not found"));

        modelMapper.map(requestDTO, bus);  // Update existing entity
        busRepository.save(bus);
    }

    @Override
    public void deleteBus(Long id) {
        busRepository.deleteById(id);
    }
}
