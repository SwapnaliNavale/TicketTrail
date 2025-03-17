package com.tickettrail.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.tickettrail.dtos.ScheduleDTO;

@FeignClient(name = "bus-service", url = "${bus-service.url}")
public interface ScheduleClient {
    @GetMapping("/schedules/{id}")
    ScheduleDTO getScheduleById(@PathVariable Long id);
}
