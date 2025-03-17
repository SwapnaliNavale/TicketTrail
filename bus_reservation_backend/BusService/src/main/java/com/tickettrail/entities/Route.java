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
@Table(name = "routes")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Route extends BaseEntity {

	// source , destination , distance , duration
//	 @Column(nullable = false)
//	private String source;
//	 
//	 @Column(nullable = false)
//	private String destination;
	
	@ManyToOne
	@JoinColumn(name = "source_id", nullable = false)
	private Location startLocation;
	
	@ManyToOne
	@JoinColumn(name = "destination_id", nullable = false)
	private Location endLocation;
	
	 
	 @Column(nullable = false)
	private Long distance;
	 
	 @Column(nullable = false)
	private LocalTime duration;
	 
	 @OneToMany(mappedBy = "route", fetch = FetchType.LAZY) // Important: LAZY for 1:N
	    private List<Schedule> schedules; // Schedules for this route

	public Route(Location source, Location destination, Long distance, LocalTime duration, List<Schedule> schedules) {
		super();
		this.startLocation = source;
		this.endLocation = destination;
		this.distance = distance;
		this.duration = duration;
		this.schedules = schedules;
	}

	
	
	 
}
