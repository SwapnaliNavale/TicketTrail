package com.bus.entities;

import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "schedules")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = {"route"})
public class Schedule extends BaseEntity {

	private LocalTime departureTime;
	
	private LocalTime arrivalTime;
	
	
	//(route 1---> *schedule)
	@ManyToOne
	@JoinColumn(name="route_id")
	private Route route;


	public Schedule(LocalTime departureTime, LocalTime arrivalTime, Route route) {
		super();
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.route = route;
	}
	
	
}
