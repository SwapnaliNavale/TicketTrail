package com.bus.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="notifications")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true , exclude = { "user" })
public class Notification extends BaseEntity {

//	message
//	notification_type(email,sms)

	@Column(nullable = false)
	private String message;
	
	@Column(nullable = false)
	private String notification_type= "email"; // notification via email
	
	//user can have multiple notifications ( notification *----->1 User)
	@ManyToOne
	@JoinColumn(name= "user_id")
	private User user;

	public Notification(String message, String notification_type, User user) {
		super();
		this.message = message;
		this.notification_type = notification_type;
		this.user = user;
	}
	
}
