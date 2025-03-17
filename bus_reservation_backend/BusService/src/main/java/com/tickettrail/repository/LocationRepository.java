package com.tickettrail.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickettrail.entities.Location;

public interface LocationRepository extends JpaRepository<Location, Long> {
}

