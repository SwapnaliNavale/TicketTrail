package com.bus.entities;

import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
	 @Column(nullable = false)
	private String source;
	 
	 @Column(nullable = false)
	private String destination;
	 
	 @Column(nullable = false)
	private Long distance;
	 
	 @Column(nullable = false)
	private LocalTime duration;

	public Route(String source, String destination, Long distance, LocalTime duration) {
		super();
		this.source = source;
		this.destination = destination;
		this.distance = distance;
		this.duration = duration;
	}
	
	 
}
