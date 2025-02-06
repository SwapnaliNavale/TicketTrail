package com.bus.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name = "tickets")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = {"schedule"})
public class Ticket extends BaseEntity {
	
//	book_date
//	seat_no
//	price
//	status(booked/cancelled)
	@Column(name="book_date", nullable=false)
	private LocalDate bookDate;
	
	@Column(name="seat_no", nullable=false)
	private int seatNo;
	
	@Column(nullable=false)
	private double price;
	
	@Column(name="is_booked")
	private boolean isBooked;

	//Ticket is associated with one schedule ( ticket *--->1 schedule)
	@ManyToOne
	@JoinColumn(name="schedule_id")
	private Schedule schedule;
	
	//User can book multiple tickets (ticket *<--->1 User)  option bi_directional
	@ManyToOne
    @JoinColumn(name = "user_id", nullable = false)  // Ensure this column exists in the DB
    private User user;

	//payment is associated with ticket (ticket 1 ----> 1 payment)
	@OneToOne
	@JoinColumn(name="payment_id")
	private Payment payment;

	public Ticket(LocalDate bookDate, int seatNo, double price, boolean isBooked, Schedule schedule, User user,
			Payment payment) {
		super();
		this.bookDate = bookDate;
		this.seatNo = seatNo;
		this.price = price;
		this.isBooked = isBooked;
		this.schedule = schedule;
		this.user = user;
		this.payment = payment;
	}
	
	
	
}
