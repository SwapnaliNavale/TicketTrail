package com.tickettrail.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tickettrail.entities.Route;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {
}

