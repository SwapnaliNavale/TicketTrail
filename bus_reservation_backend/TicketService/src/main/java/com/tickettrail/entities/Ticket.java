package com.tickettrail.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "tickets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Ticket extends BaseEntity {

	@Column(nullable = false)
	private Long userId; // User ID from User Service

	@Column(nullable = false)
	private Long scheduleId; // Schedule ID from Bus Service

	@Column(nullable = false)
	private Integer seatNo;

	@Column(nullable = false)
	private Double price;

	@Column(nullable = false)
	private LocalDateTime bookDate;

}
