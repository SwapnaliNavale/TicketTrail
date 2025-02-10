package com.tickettrail.controller;



import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.tickettrail.dto.TicketRequestDTO;
import com.tickettrail.dto.TicketResponseDTO;
import com.tickettrail.dto.ApiResponse;
import com.tickettrail.service.TicketService;

@RestController
@RequestMapping("/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @PostMapping
    public ResponseEntity<ApiResponse<TicketResponseDTO>> bookTicket(@RequestBody TicketRequestDTO requestDTO) {
        TicketResponseDTO ticket = ticketService.bookTicket(requestDTO);
        return ResponseEntity.ok(ApiResponse.success(ticket, "Ticket booked successfully"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<TicketResponseDTO>> getTicketById(@PathVariable Long id) {
        TicketResponseDTO ticket = ticketService.getTicketById(id);
        return ticket != null ? ResponseEntity.ok(ApiResponse.success(ticket)) : ResponseEntity.badRequest().body(ApiResponse.error("Ticket not found"));
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

