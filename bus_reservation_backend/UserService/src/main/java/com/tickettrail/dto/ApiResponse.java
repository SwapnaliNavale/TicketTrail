package com.tickettrail.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//DTO :  resp DTO : to send API resp from rest server ---> rest clnt
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ApiResponse<T> {

    private String status; // "success" or "error"
    private T data; // The data to be sent
    private String message; // Optional message (e.g., error details)

    // Constructor with status and data
    public ApiResponse(String status, T data) {
        this.status = status;
        this.data = data;
    }

    // Constructor with status and message (for errors)
    public ApiResponse(String status, String message) {
        this.status = status;
        this.message = message;
    }

    // Static factory methods for convenience
    public static <T> ApiResponse<T> success(T data) {
        return new ApiResponse<>("success", data);
    }

    public static <T> ApiResponse<T> success(T data, String message) {
        return new ApiResponse<>("success", data, message);
    }

    public static <T> ApiResponse<T> error(String message) {
        return new ApiResponse<>("error", message);
    }

    public static <T> ApiResponse<T> error(String message, T data) {
        return new ApiResponse<>("error", data, message);
    }

}