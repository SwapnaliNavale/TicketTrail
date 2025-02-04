package com.bus.dto;

import java.time.LocalDate;

import org.hibernate.validator.constraints.Range;

import com.bus.entities.Address;
import com.bus.entities.Gender;
import com.bus.entities.UserRole;

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
public class UserDTO {
	@NotBlank
	private String firstName;
	private String lastName;
	
	@Email (message = "Invalid Email Format")
	private String email;
	
	@NotBlank
	@Pattern(
	        regexp = "^(?=.*[A-Z])(?=.*\\d)(?=.*[#@$*.])[A-Za-z\\d#@$*.]{8,16}$",
	        message = "Password must be 8-16 characters long and contain at least one uppercase letter, one digit, and one special character from #@$*. Spaces and other special characters are not allowed."
	    )
	    private String password;
	
	@NotBlank
	private String confirmPassword;
	
	@NotNull
	@Past
	private LocalDate dob;
	
	
	private Long mobileNo;
	
//	@NotBlank
	private int age;
	
//	@NotBlank
	private Gender gender;

	
	private Address userAddress;
	
	@NotNull
	private UserRole role= UserRole.ROLE_CUSTOMER;
}
