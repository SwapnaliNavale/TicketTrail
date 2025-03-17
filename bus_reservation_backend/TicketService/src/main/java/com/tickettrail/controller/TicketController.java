package com.tickettrail.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tickettrail.dtos.ApiResponse;
import com.tickettrail.dtos.TicketRequestDTO;
import com.tickettrail.dtos.TicketResponseDTO;
import com.tickettrail.service.TicketService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/tickets")
@RequiredArgsConstructor
public class TicketController {

    private final TicketService ticketService;

    @PostMapping
    public ResponseEntity<ApiResponse<TicketResponseDTO>> bookTicket(@RequestBody TicketRequestDTO requestDTO) {
        TicketResponseDTO ticket = ticketService.bookTicket(requestDTO);
        return ResponseEntity.ok(ApiResponse.success(ticket, "Ticket booked successfully"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<TicketResponseDTO>> getTicketById(@PathVariable Long id) {
        TicketResponseDTO ticket = ticketService.getTicketById(id);
        return ResponseEntity.ok(ApiResponse.success(ticket));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<ApiResponse<List<TicketResponseDTO>>> getTicketsByUserId(@PathVariable Long userId) {
        List<TicketResponseDTO> tickets = ticketService.getTicketsByUserId(userId);
        return ResponseEntity.ok(ApiResponse.success(tickets));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<TicketResponseDTO>> updateTicket(@PathVariable Long id, @RequestBody TicketRequestDTO requestDTO) {
        TicketResponseDTO ticket = ticketService.updateTicket(id, requestDTO);
        return ResponseEntity.ok(ApiResponse.success(ticket, "Ticket updated successfully"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> deleteTicket(@PathVariable Long id) {
        ticketService.deleteTicket(id);
        return ResponseEntity.ok(ApiResponse.success("Ticket deleted successfully"));
    }
}

