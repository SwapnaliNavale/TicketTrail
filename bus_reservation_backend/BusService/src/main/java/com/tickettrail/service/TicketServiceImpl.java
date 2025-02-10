package com.tickettrail.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.tickettrail.dto.TicketRequestDTO;
import com.tickettrail.dto.TicketResponseDTO;
import com.tickettrail.entities.Ticket;
import com.tickettrail.repository.TicketRepository;

@Service
@Transactional
public class TicketServiceImpl implements TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public TicketResponseDTO bookTicket(TicketRequestDTO requestDTO) {
        Ticket ticket = modelMapper.map(requestDTO, Ticket.class);
        ticket = ticketRepository.save(ticket);
        return modelMapper.map(ticket, TicketResponseDTO.class);
    }

    @Override
    public TicketResponseDTO getTicketById(Long id) {
        Optional<Ticket> ticket = ticketRepository.findById(id);
        return ticket.map(t -> modelMapper.map(t, TicketResponseDTO.class)).orElse(null);
    }

    @Override
    public List<TicketResponseDTO> getTicketsByUserId(Long userId) {
        List<Ticket> tickets = ticketRepository.findByUserId(userId);
        return tickets.stream().map(ticket -> modelMapper.map(ticket, TicketResponseDTO.class)).collect(Collectors.toList());
    }

    @Override
    public TicketResponseDTO updateTicket(Long id, TicketRequestDTO requestDTO) {
        Ticket ticket = ticketRepository.findById(id).orElseThrow(() -> new RuntimeException("Ticket not found"));
        modelMapper.map(requestDTO, ticket);
        ticketRepository.save(ticket);
        return modelMapper.map(ticket, TicketResponseDTO.class);
    }

    @Override
    public void deleteTicket(Long id) {
        ticketRepository.deleteById(id);
    }
}
