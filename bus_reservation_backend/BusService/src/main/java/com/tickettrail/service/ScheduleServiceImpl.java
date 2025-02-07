package com.tickettrail.service;

import com.tickettrail.dto.ScheduleRequestDTO;
import com.tickettrail.dto.ScheduleResponseDTO;
import com.tickettrail.entities.Bus;
import com.tickettrail.entities.Route;
import com.tickettrail.entities.Schedule;
import com.tickettrail.repository.BusRepository;
import com.tickettrail.repository.RouteRepository;
import com.tickettrail.repository.ScheduleRepository;
import com.tickettrail.service.ScheduleService;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private RouteRepository routeRepository;

    @Autowired
    private BusRepository busRepository;

    @Override
    public ScheduleResponseDTO createSchedule(ScheduleRequestDTO dto) {
        Route route = routeRepository.findById(dto.getRouteId())
                .orElseThrow(() -> new RuntimeException("Route not found"));

        Bus bus = busRepository.findById(dto.getBusId())
                .orElseThrow(() -> new RuntimeException("Bus not found"));

        Schedule schedule = new Schedule();
        schedule.setDepartureTime(dto.getDepartureTime());
        schedule.setArrivalTime(dto.getArrivalTime());
        schedule.setRoute(route);
        schedule.setBus(bus);

        Schedule savedSchedule = scheduleRepository.save(schedule);
        return new ScheduleResponseDTO(savedSchedule);
    }

    @Override
    public ScheduleResponseDTO getScheduleById(Long id) {
        Schedule schedule = scheduleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Schedule not found"));
        return new ScheduleResponseDTO(schedule);
    }

    @Override
    public List<ScheduleResponseDTO> getAllSchedules() {
        return scheduleRepository.findAll()
                .stream()
                .map(ScheduleResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteSchedule(Long id) {
        Schedule schedule = scheduleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Schedule not found"));
        scheduleRepository.delete(schedule);
    }
}
