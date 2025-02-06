package com.tickettrail.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.Valid;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity // to specify
//following class represents DB entity
@Table(name = "buses") // to specify name of the table
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = { "admin", "schedule" })
public class Bus extends BaseEntity {

	@Column(name = "bus_no", unique = true)
	private String busNo;

	@Column(nullable = false)
	private int capacity;

	// bus is managed by one admin ( bus *-----> 1admin)

	@Column(name = "user_id") // Store the User ID
    private Long adminId; // No User entity here

	// Schedule is linked with one bus and one route (bus *------> 1 schedule) ,
	@ManyToOne
	@JoinColumn(name = "schedule_id")
	private Schedule schedule;

	@OneToMany(mappedBy = "bus", fetch = FetchType.LAZY) // Important: LAZY for 1:N
	private List<Schedule> schedules; // Schedules for this bus

	public Bus(String busNo, int capacity, Schedule schedule, List<Schedule> schedules) {
		super();
		this.busNo = busNo;
		this.capacity = capacity;
		this.schedule = schedule;
		this.schedules = new ArrayList<>();
	}

	
}
