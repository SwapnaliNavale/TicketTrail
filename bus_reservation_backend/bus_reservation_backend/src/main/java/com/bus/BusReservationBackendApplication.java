package com.bus;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class BusReservationBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BusReservationBackendApplication.class, args);
	}
	
	@Bean // equivalent to <bean id ..../> in xml file
	public ModelMapper modelMapper() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration()
		.setMatchingStrategy(MatchingStrategies.STRICT) 
		/* only MATCHING prop names between src n dest will be transferred , during the mapping
		*/
				.setPropertyCondition(Conditions.isNotNull());// only non null properties will be transferred from src
																// --> dest , during the mapping
		return modelMapper;

	}
	/*
	 * Configure Password encoder bean , to encrypt raw password,
	 * using SHA (secure hashing algo)
	 */
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
