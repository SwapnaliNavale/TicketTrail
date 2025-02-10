package com.tickettrail.service;

import java.util.List;
import com.tickettrail.dto.TicketRequestDTO;
import com.tickettrail.dto.TicketResponseDTO;

public interface TicketService {
    TicketResponseDTO bookTicket(TicketRequestDTO requestDTO);
    TicketResponseDTO getTicketById(Long id);
    List<TicketResponseDTO> getTicketsByUserId(Long userId);
    TicketResponseDTO updateTicket(Long id, TicketRequestDTO requestDTO);
    void deleteTicket(Long id);
}
