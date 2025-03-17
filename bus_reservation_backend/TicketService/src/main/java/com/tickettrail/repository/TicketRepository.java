package com.tickettrail.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tickettrail.entities.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

List<Ticket> findByUserId(Long userId);
    
    @Query("SELECT COUNT(t) FROM Ticket t WHERE t.schedule.id = :scheduleId AND t.seatNo = :seatNo")
    int countByScheduleIdAndSeatNo(@Param("scheduleId") Long scheduleId, @Param("seatNo") Integer seatNo);
}
