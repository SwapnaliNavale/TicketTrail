package com.bus.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	@GetMapping("/login")
	public List<Integer> test() {
		return List.of(1, 2, 3);
	}
}
