package com.tickettrail.dto;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.tickettrail.entities.Address;
import com.tickettrail.entities.Gender;
import com.tickettrail.entities.UserRole;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserTicketDTO extends BaseDTO {
	@NotBlank
	private String firstName;
	private String lastName;
	
	
	private String email;
	
	@JsonProperty(access=Access.WRITE_ONLY)
	private String password;
	
	
	private LocalDate dob;
	
	
	private Long mobileNo;
	

	private int age;
	

	private Gender gender;

	
	private Address userAddress;
	
	
	private UserRole role= UserRole.ROLE_CUSTOMER;
	
	@JsonProperty(access = Access.READ_ONLY)
	List<TicketResponseDTO> ticekts;
}
