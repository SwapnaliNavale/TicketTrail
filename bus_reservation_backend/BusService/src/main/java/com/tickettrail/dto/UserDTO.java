package com.tickettrail.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO extends BaseDTO {
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

	
	private AddressDTO userAddress;
	
	
	private UserRole role= UserRole.ROLE_CUSTOMER;
}
