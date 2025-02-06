package com.bus.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "payments")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true,  exclude = {"ticket"})
public class Payment extends BaseEntity {

//	payment_date
//	amount
//	payment_method(upi/creditcard)
//	status(sucess/failed)
	
	@Column(nullable=false)
	private LocalDate paymentDate;
	
	@Column(nullable=false)
	private double Amount;
	
	@Column(name = "payment_method", nullable= false)
	private PaymentMethod paymentMethod;
	
	@Column(name= "is_successfull")
	private boolean isSucessfull;
	
	
	//payment is associated with ticket (ticket 1 ----> 1 payment)
	@OneToOne
	//@JoinColumn(name="ticket_id")
	private Ticket ticket;


	public Payment(LocalDate paymentDate, double amount, PaymentMethod paymentMethod, boolean isSucessfull,
			Ticket ticket) {
		super();
		this.paymentDate = paymentDate;
		Amount = amount;
		this.paymentMethod = paymentMethod;
		this.isSucessfull = isSucessfull;
		this.ticket = ticket;
	}
	
	
	
	
	
}

