package com.tickettrail.custom_exceptions;

@SuppressWarnings("serial")
public class AuthenticationException extends RuntimeException {
	public AuthenticationException(String message) {
		super(message);
	}

}
