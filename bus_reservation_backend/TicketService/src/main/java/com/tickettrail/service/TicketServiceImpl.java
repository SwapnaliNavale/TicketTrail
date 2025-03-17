package com.tickettrail.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.tickettrail.dtos.ScheduleDTO;
import com.tickettrail.dtos.TicketRequestDTO;
import com.tickettrail.dtos.TicketResponseDTO;
import com.tickettrail.dtos.UserDTO;
import com.tickettrail.entities.Ticket;
import com.tickettrail.repository.TicketRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class TicketServiceImpl implements TicketService {

    private final TicketRepository ticketRepository;
    private final UserClient userClient;
    private final ScheduleClient scheduleClient;
    private final ModelMapper modelMapper;

    @Override
    public TicketResponseDTO bookTicket(TicketRequestDTO requestDTO) {
        // Fetch user from User Service
        UserDTO user = userClient.getUserById(requestDTO.getUserId());
        if (user == null) {
            throw new RuntimeException("User not found with ID: " + requestDTO.getUserId());
        }

        // Fetch schedule from Bus Service
        ScheduleDTO schedule = scheduleClient.getScheduleById(requestDTO.getScheduleId());
        if (schedule == null) {
            throw new RuntimeException("Schedule not found with ID: " + requestDTO.getScheduleId());
        }

        // Concurrency Handling - Check if the seat is already booked
        if (ticketRepository.countByScheduleIdAndSeatNo(schedule.getId(), requestDTO.getSeatNo()) > 0) {
            throw new RuntimeException("Seat " + requestDTO.getSeatNo() + " is already booked.");
        }

        // Create and save ticket
        Ticket ticket = new Ticket();
        ticket.setUserId(requestDTO.getUserId());
        ticket.setScheduleId(requestDTO.getScheduleId());
        ticket.setSeatNo(requestDTO.getSeatNo());
        ticket.setPrice(requestDTO.getPrice());
        ticket.setBookDate(requestDTO.getBookDate());

        Ticket savedTicket = ticketRepository.save(ticket);

        return modelMapper.map(savedTicket, TicketResponseDTO.class);
    }

	@Override
	public TicketResponseDTO getTicketById(Long id) {
		Ticket ticket = ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket not found with id: " + id));
        return modelMapper.map(ticket, TicketResponseDTO.class);
	}

	@Override
	public List<TicketResponseDTO> getTicketsByUserId(Long userId) {
		List<Ticket> tickets = ticketRepository.findByUserId(userId);
        return tickets.stream()
                .map(ticket -> modelMapper.map(ticket, TicketResponseDTO.class))
                .collect(Collectors.toList());
	}

	@Override
	public TicketResponseDTO updateTicket(Long id, TicketRequestDTO requestDTO) {
		Ticket ticket = ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket not found with id: " + id));

        ticket.setSeatNo(requestDTO.getSeatNo());
        ticket.setPrice(requestDTO.getPrice());
        ticket.setBookDate(requestDTO.getBookDate());

        Ticket updatedTicket = ticketRepository.save(ticket);
        return modelMapper.map(updatedTicket, TicketResponseDTO.class);
	}

	@Override
	public void deleteTicket(Long id) {
		 if (!ticketRepository.existsById(id)) {
	            throw new RuntimeException("Ticket not found with id: " + id);
	        }
	        ticketRepository.deleteById(id);
		
	}
}


