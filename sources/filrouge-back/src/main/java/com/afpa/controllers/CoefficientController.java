package com.afpa.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.afpa.dto.CoefficientDto;
import com.afpa.service.ICoefficientService;

@RestController
public class CoefficientController {
	
	@Autowired
	ICoefficientService coeffserv;
	
	@GetMapping(path = "/coefficients")
	public List<CoefficientDto> listeCoeffiecient() {
		return this.coeffserv.listeCoefficients();
	}
	
	@GetMapping(path = "/coefficients/{id}")
	public CoefficientDto coefficientById(@PathVariable String id) {
		return this.coeffserv.coefficientById(Integer.parseInt(id));
	}
	
	@PostMapping(path = "/coefficients")
	public CoefficientDto addCoeffiecient(@RequestBody CoefficientDto coefficient) {
		CoefficientDto co = this.coeffserv.addCoefficient(coefficient);
		return co;
	}
	
	@PutMapping(path = "/coefficients")
	public void putCoefficient(@RequestBody CoefficientDto coefficient) {
		this.coeffserv.putCoefficient(coefficient);
	}
	
	@DeleteMapping(path = "/coefficients/{id}")
	public CoefficientDto deleteCoefficient(@PathVariable String id) {
		return this.coeffserv.deleteCoefficient(Integer.parseInt(id));
	}

}
