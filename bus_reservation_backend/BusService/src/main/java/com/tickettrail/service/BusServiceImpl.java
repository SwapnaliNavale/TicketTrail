package com.tickettrail.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tickettrail.dtos.BusRequestDTO;
import com.tickettrail.dtos.BusResponseDTO;
import com.tickettrail.entities.Bus;
import com.tickettrail.repositories.busRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class BusServiceImpl implements BusService {
	@Autowired
	private busRepository busRepository;

	@Override
	public void addBus(BusRequestDTO requestDTO) {
		 Bus bus = new Bus();
	        bus.setBusNo(requestDTO.getBusNo());
	        bus.setCapacity(requestDTO.getCapacity());
	        bus.setAdminId(requestDTO.getUserId());
	        bus.setSchedule(requestDTO.getSchedule());
	        busRepository.save(bus);

	}

	@Override
	public BusResponseDTO getBus(Long id) {
		Optional<Bus> bus = busRepository.findById(id);
        return bus.map(value -> new BusResponseDTO(value.getId(), value.getBusNo(), value.getCapacity(), value.getAdminId(), value.getSchedule())).orElse(null);
	}

	@Override
	public void updateBus(Long id, BusRequestDTO requestDTO) {
		 Bus bus = busRepository.findById(id).orElseThrow(() -> new RuntimeException("Bus not found"));
	        bus.setBusNo(requestDTO.getBusNo());
	        bus.setCapacity(requestDTO.getCapacity());
	        bus.setAdminId(requestDTO.getUserId());
	        bus.setSchedule(requestDTO.getSchedule());
	        busRepository.save(bus);

	}

	@Override
	public void deleteBus(Long id) {
		busRepository.deleteById(id);

	}

}
