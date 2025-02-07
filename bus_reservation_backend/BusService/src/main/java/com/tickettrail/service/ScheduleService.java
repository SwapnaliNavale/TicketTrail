package com.tickettrail.service;

import com.tickettrail.dto.ScheduleRequestDTO;
import com.tickettrail.dto.ScheduleResponseDTO;

import java.util.List;

public interface ScheduleService {
    ScheduleResponseDTO createSchedule(ScheduleRequestDTO dto);
    ScheduleResponseDTO getScheduleById(Long id);
    List<ScheduleResponseDTO> getAllSchedules();
    void deleteSchedule(Long id);
}


