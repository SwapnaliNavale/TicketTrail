package com.tickettrail.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tickettrail.dto.ApiResponse;
import com.tickettrail.dto.TicketRequestDTO;
import com.tickettrail.dto.TicketResponseDTO;
import com.tickettrail.entities.Schedule;
import com.tickettrail.entities.Ticket;
import com.tickettrail.repository.ScheduleRepository;
import com.tickettrail.repository.TicketRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class TicketServiceImpl implements TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Override
    public ApiResponse<TicketResponseDTO> bookTicket(TicketRequestDTO requestDTO) {
        Optional<Schedule> scheduleOpt = scheduleRepository.findById(requestDTO.getScheduleId());
        if (!scheduleOpt.isPresent()) {
            return ApiResponse.error("Schedule not found");
        }

        Ticket ticket = new Ticket();
        ticket.setBookDate(LocalDate.now());
        ticket.setSeatNo(requestDTO.getSeatNo());
        ticket.setPrice(requestDTO.getPrice());
        ticket.setBooked(true);
        ticket.setSchedule(scheduleOpt.get());
        ticket.setUserId(requestDTO.getUserId());

        Ticket savedTicket = ticketRepository.save(ticket);
        TicketResponseDTO responseDTO = convertToDTO(savedTicket);
        return ApiResponse.success(responseDTO, "Ticket booked successfully");
    }

    @Override
    public ApiResponse<TicketResponseDTO> getTicketById(Long ticketId) {
        Optional<Ticket> ticketOpt = ticketRepository.findById(ticketId);
        if (!ticketOpt.isPresent()) {
            return ApiResponse.error("Ticket not found");
        }
        return ApiResponse.success(convertToDTO(ticketOpt.get()));
    }

    @Override
    public ApiResponse<TicketResponseDTO> updateTicket(Long ticketId, TicketRequestDTO requestDTO) {
        Optional<Ticket> ticketOpt = ticketRepository.findById(ticketId);
        if (!ticketOpt.isPresent()) {
            return ApiResponse.error("Ticket not found");
        }

        Ticket ticket = ticketOpt.get();
        ticket.setSeatNo(requestDTO.getSeatNo());
        ticket.setPrice(requestDTO.getPrice());
        ticket.setBooked(true);

        Ticket updatedTicket = ticketRepository.save(ticket);
        return ApiResponse.success(convertToDTO(updatedTicket), "Ticket updated successfully");
    }

    @Override
    public ApiResponse<String> deleteTicket(Long ticketId) {
        Optional<Ticket> ticketOpt = ticketRepository.findById(ticketId);
        if (!ticketOpt.isPresent()) {
            return ApiResponse.error("Ticket not found");
        }
        ticketRepository.deleteById(ticketId);
        return ApiResponse.success("Ticket deleted successfully");
    }

    @Override
    public ApiResponse<List<TicketResponseDTO>> getTicketsByUser(Long userId) {
        List<Ticket> tickets = ticketRepository.findByUserId(userId);
        List<TicketResponseDTO> responseDTOs = tickets.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        return ApiResponse.success(responseDTOs, "User's tickets retrieved successfully");
    }

    private TicketResponseDTO convertToDTO(Ticket ticket) {
        return new TicketResponseDTO(
                ticket.getId(),
                ticket.getBookDate(),
                ticket.getSeatNo(),
                ticket.getPrice(),
                ticket.isBooked(),
                ticket.getSchedule().getId(),
                ticket.getUserId(),
                ticket.getPaymentId()
        );
    }
}

