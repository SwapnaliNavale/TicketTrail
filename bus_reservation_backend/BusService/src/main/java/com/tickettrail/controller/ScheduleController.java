package com.tickettrail.controller;

import com.tickettrail.dto.ApiResponse;
import com.tickettrail.dto.ScheduleRequestDTO;
import com.tickettrail.dto.ScheduleResponseDTO;
import com.tickettrail.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/schedules")
public class ScheduleController {

    @Autowired
    private ScheduleService scheduleService;

    @PostMapping
    public ResponseEntity<ApiResponse<ScheduleResponseDTO>> createSchedule(@RequestBody ScheduleRequestDTO dto) {
        return ResponseEntity.ok(ApiResponse.success(scheduleService.createSchedule(dto), "Schedule created successfully"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ScheduleResponseDTO>> getScheduleById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(scheduleService.getScheduleById(id)));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ScheduleResponseDTO>>> getAllSchedules() {
        return ResponseEntity.ok(ApiResponse.success(scheduleService.getAllSchedules()));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> deleteSchedule(@PathVariable Long id) {
        scheduleService.deleteSchedule(id);
        return ResponseEntity.ok(ApiResponse.success("Schedule deleted successfully"));
    }
}

