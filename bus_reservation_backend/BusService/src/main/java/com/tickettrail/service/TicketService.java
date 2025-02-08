package com.tickettrail.service;

import java.util.List;

import com.tickettrail.dto.TicketRequestDTO;
import com.tickettrail.dto.TicketResponseDTO;
import com.tickettrail.dto.ApiResponse;

public interface TicketService {
    ApiResponse<TicketResponseDTO> bookTicket(TicketRequestDTO requestDTO);
    ApiResponse<TicketResponseDTO> getTicketById(Long ticketId);
    ApiResponse<TicketResponseDTO> updateTicket(Long ticketId, TicketRequestDTO requestDTO);
    ApiResponse<String> deleteTicket(Long ticketId);
    ApiResponse<List<TicketResponseDTO>> getTicketsByUser(Long userId);
}
