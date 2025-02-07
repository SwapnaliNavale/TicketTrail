package com.tickettrail.service;

import java.util.Optional;

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
	private BusRepository BusRepository;

	@Override
	public void addBus(BusRequestDTO requestDTO) {
		 Bus bus = new Bus();
	        bus.setBusNo(requestDTO.getBusNo());
	        bus.setCapacity(requestDTO.getCapacity());
	        bus.setAdminId(requestDTO.getUserId());
	        bus.setSchedule(requestDTO.getSchedule());
	        BusRepository.save(bus);

	}

	@Override
	public BusResponseDTO getBus(Long id) {
		Optional<Bus> bus = BusRepository.findById(id);
        return bus.map(value -> new BusResponseDTO(value.getId(), value.getBusNo(), value.getCapacity(), value.getAdminId(), value.getSchedule())).orElse(null);
	}

	@Override
	public void updateBus(Long id, BusRequestDTO requestDTO) {
		 Bus bus = BusRepository.findById(id).orElseThrow(() -> new RuntimeException("Bus not found"));
	        bus.setBusNo(requestDTO.getBusNo());
	        bus.setCapacity(requestDTO.getCapacity());
	        bus.setAdminId(requestDTO.getUserId());
	        bus.setSchedule(requestDTO.getSchedule());
	        BusRepository.save(bus);

	}

	@Override
	public void deleteBus(Long id) {
		BusRepository.deleteById(id);

	}

}
