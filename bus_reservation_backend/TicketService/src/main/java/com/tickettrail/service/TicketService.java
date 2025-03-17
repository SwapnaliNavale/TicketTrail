package com.tickettrail.service;

import java.util.List;

import com.tickettrail.dtos.TicketRequestDTO;
import com.tickettrail.dtos.TicketResponseDTO;

public interface TicketService {
    TicketResponseDTO bookTicket(TicketRequestDTO requestDTO);
    TicketResponseDTO getTicketById(Long id);
    List<TicketResponseDTO> getTicketsByUserId(Long userId);
    TicketResponseDTO updateTicket(Long id, TicketRequestDTO requestDTO);
    void deleteTicket(Long id);
}
