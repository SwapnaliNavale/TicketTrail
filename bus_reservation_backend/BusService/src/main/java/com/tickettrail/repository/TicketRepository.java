package com.tickettrail.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickettrail.entities.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    List<Ticket> findByUserId(Long userId);
}

