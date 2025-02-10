package com.tickettrail.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tickettrail.dto.BusResponseDTO;
import com.tickettrail.dto.RouteResponseDTO;
import com.tickettrail.dto.ScheduleRequestDTO;
import com.tickettrail.dto.ScheduleResponseDTO;
import com.tickettrail.entities.Bus;
import com.tickettrail.entities.Route;
import com.tickettrail.entities.Schedule;
import com.tickettrail.repository.BusRepository;
import com.tickettrail.repository.RouteRepository;
import com.tickettrail.repository.ScheduleRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private RouteRepository routeRepository;

    @Autowired
    private BusRepository busRepository;
    
    @Autowired
    private ModelMapper modelMapper;


    @Override
    public ScheduleResponseDTO createSchedule(ScheduleRequestDTO dto) {
        Route route = routeRepository.findById(dto.getRouteId())
                .orElseThrow(() -> new RuntimeException("Route not found"));

        Bus bus = busRepository.findById(dto.getBusId())
                .orElseThrow(() -> new RuntimeException("Bus not found"));

        // Using ModelMapper to map DTO to Entity
        Schedule schedule = modelMapper.map(dto, Schedule.class);
        schedule.setRoute(route);
        schedule.setBus(bus);

        Schedule savedSchedule = scheduleRepository.save(schedule);

        // Using ModelMapper to map Entity to Response DTO
        return modelMapper.map(savedSchedule, ScheduleResponseDTO.class);
    }


    @Override
    public ScheduleResponseDTO getScheduleById(Long id) {
        Schedule schedule = scheduleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Schedule not found"));
        
        return modelMapper.map(schedule, ScheduleResponseDTO.class);
    }

//    @Override
//    public List<ScheduleResponseDTO> getAllSchedules() {
//        return scheduleRepository.findAllWithDetails()
//                .stream()
//                .map(schedule -> modelMapper.map(schedule, ScheduleResponseDTO.class))
//                .collect(Collectors.toList());
//    }
    @Override
    public List<ScheduleResponseDTO> getAllSchedules() {
        return scheduleRepository.findAll()
                .stream()
                .map(schedule -> {
                    ScheduleResponseDTO responseDTO = modelMapper.map(schedule, ScheduleResponseDTO.class);

                    // Manually setting RouteResponseDTO
                    if (schedule.getRoute() != null) {
                        responseDTO.setRoute(modelMapper.map(schedule.getRoute(), RouteResponseDTO.class));
                    }
                    
                    if (schedule.getBus() != null) {
                        responseDTO.setBus(modelMapper.map(schedule.getBus(), BusResponseDTO.class));
                    }

                    return responseDTO;
                })
                .collect(Collectors.toList());
    }


    @Override
    public void deleteSchedule(Long id) {
        Schedule schedule = scheduleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Schedule not found"));
        scheduleRepository.delete(schedule);
    }
}
