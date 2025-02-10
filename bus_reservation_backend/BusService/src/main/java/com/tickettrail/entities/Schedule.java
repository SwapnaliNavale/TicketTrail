package com.tickettrail.entities;

import java.time.LocalTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
	@Column (name="departure_time")
	private LocalTime departureTime;
	@Column (name = "arrival_time")
	private LocalTime arrivalTime;
	
	
	//(route 1---> *schedule)
	@ManyToOne(fetch = FetchType.EAGER) // Default for @ManyToOne, but explicit is good
    @JoinColumn(name = "routeId")
    private Route route;
	
	@ManyToOne(fetch = FetchType.EAGER) // Default for @ManyToOne, but explicit is good
    @JoinColumn(name = "busId")
    private Bus bus;

	 @OneToMany(mappedBy = "schedule", fetch = FetchType.LAZY) // Important: LAZY for 1:N
	 private List<Ticket> tickets; // Tickets for this schedule
	 
	public Schedule(LocalTime departureTime, LocalTime arrivalTime, Route route) {
		super();
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.route = route;
	}
	
	
}
