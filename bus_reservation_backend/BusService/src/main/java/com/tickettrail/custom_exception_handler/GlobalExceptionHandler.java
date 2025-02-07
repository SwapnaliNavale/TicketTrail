package com.tickettrail.custom_exception_handler;

import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.tickettrail.custom_exceptions.ResourceNotFoundException;
import com.tickettrail.dto.ApiResponse;

@RestControllerAdvice // =@ControllerAdvice => global exc handler class
//--common interceptor to intercept ALL excs in all contoller + @ResponseBody added impl. 
//on ret types of all req handling methods 
public class GlobalExceptionHandler {
	// method level anno to tell SC , following is an exc handling method : to
	// handle MethodArgumentNotValidException
//	@ExceptionHandler(MethodArgumentNotValidException.class)
//	public ResponseEntity<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
//		System.out.println("in method arg invalid " + e);
//		List<FieldError> fieldErrors = e.getFieldErrors();// list of fiels having validation errs
//		Map<String, String> map = fieldErrors.stream()
//				.collect(Collectors.toMap
//						(FieldError::getField, FieldError::getDefaultMessage));
//		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//				.body(map);
//	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ApiResponse<Map<String, String>>> handleMethodArgumentNotValidException(
	        MethodArgumentNotValidException e) {
	    
	    System.out.println("Validation error: " + e);
	    Map<String, String> errors = e.getFieldErrors().stream()
	            .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
	    
	    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
	            .body(ApiResponse.error("error", errors)); // Correct constructor
	}
	
	
	// method level anno to tell SC , following is an exc handling method : to
	// handle : ResourceNotFoundException
//	

	@ExceptionHandler(ResourceNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public ResponseEntity<ApiResponse<String>> handleResourceNotFoundException(ResourceNotFoundException e) {
	    System.out.println("Resource not found: " + e);
	    return ResponseEntity.status(HttpStatus.NOT_FOUND)
	            .body(new ApiResponse<>(e.getMessage(), "error"));
	}
	
	@ExceptionHandler(AuthenticationException.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	public ResponseEntity<ApiResponse<String>> handleAuthenticationException(AuthenticationException e) {
	    System.out.println("Authentication error: " + e);
	    return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	            .body(new ApiResponse<>(e.getMessage(), "error"));
	}

	// method level anno to tell SC , following is an exc handling method : to
	// handle any other remaining exc => catch all
//	@ExceptionHandler(RuntimeException.class)
//	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
//	public ApiResponse handleAnyException(RuntimeException e) {
//		System.out.println("in catch-all " + e);
//		return new ApiResponse(e.getMessage(),"error");
//	}
	
	@ExceptionHandler(RuntimeException.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	public ResponseEntity<ApiResponse<String>> handleAnyException(RuntimeException e) {
	    System.out.println("Unhandled exception: " + e);
	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	            .body(new ApiResponse<>(e.getMessage(), "error"));
	}
}

