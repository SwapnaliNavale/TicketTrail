package com.tickettrail.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tickettrail.entities.Bus;

@Repository
public interface busRepository extends JpaRepository<Bus, Long>{

}
