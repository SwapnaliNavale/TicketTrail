package com.tickettrail.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tickettrail.entities.Schedule;
import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    List<Schedule> findByBusId(Long busId);
    List<Schedule> findByRouteId(Long routeId);
    List<Schedule> findAll();
    
    @Query("SELECT s FROM Schedule s JOIN FETCH s.route JOIN FETCH s.bus")
    List<Schedule> findAllWithDetails();
}

