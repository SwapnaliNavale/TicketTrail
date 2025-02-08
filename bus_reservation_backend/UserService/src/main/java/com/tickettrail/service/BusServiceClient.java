package com.tickettrail.service;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.tickettrail.dto.UserDTO;

//@FeignClient(url="http://localhost:8081/bus" , value = "Bus-Service")
@FeignClient(name="Bus-Service") 
public interface BusServiceClient  {
//	@GetMapping("/posts/blogger/{bloggerId}")
//	List<BlogPostRespDTO> getPostByAuthor(@PathVariable Long bloggerId);
//	@GetMapping("/bus/{busId}")
//    BusDTO getBusById(@PathVariable("busId") Long busId);
//
//    @GetMapping("/bus/all")
//    List<BusDTO> getAllBuses();
    
    @GetMapping("/bus/tickets/users/{userId}")
	UserDTO getUserDetailsById(@PathVariable Long userId);
	
}
