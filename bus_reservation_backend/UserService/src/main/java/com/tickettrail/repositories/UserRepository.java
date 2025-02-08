package com.tickettrail.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tickettrail.dto.UserDTO;
import com.tickettrail.entities.User;

import feign.Param;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
//load use details by user name(email)
	Optional<User> findByEmail(String email);
	boolean existsByEmail(String email);
	Optional<User> findByEmailAndPassword(String email, String password);
	
	// UserRepository.java
	@Query("SELECT u FROM User u JOIN FETCH u.bookedTickets WHERE u.id = :userId") // Use 'id', not 'userId'
	User findUserWithBookedTickets(@Param("userId") Long userId);

	
}
