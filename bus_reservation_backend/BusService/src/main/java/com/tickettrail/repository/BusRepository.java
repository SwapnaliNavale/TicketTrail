package com.tickettrail.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tickettrail.entities.Bus;

@Repository
public interface BusRepository extends JpaRepository<Bus, Long>{

}
