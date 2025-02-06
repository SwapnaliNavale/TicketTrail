package com.tickettrail.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickettrail.dto.UserDTO;
import com.tickettrail.entities.User;



public interface UserRepository extends JpaRepository<User, Long> {
//load use details by user name(email)
	Optional<User> findByEmail(String email);
	boolean existsByEmail(String email);
	Optional<User> findByEmailAndPassword(String email, String password);
	
}
