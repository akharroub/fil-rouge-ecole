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

import com.afpa.dto.EmployeDto;
import com.afpa.service.IEmployeService;

@RestController
public class EmployeController {
	
	@Autowired
	IEmployeService empServ;
	
	@GetMapping(path = "/employes")
	public List<EmployeDto> listeEmployes() {
		return this.empServ.listeEmployes();
	}
	
	@GetMapping(path = "/employes/{id}")
	public EmployeDto employeById(@PathVariable String id) {
		return this.empServ.employeById(Integer.parseInt(id));
	}
	
	@GetMapping(path = "/employes/total")
	public Integer nbrEmploye() {
		return this.empServ.nbrEmploye();
	}
	
	@PostMapping(path = "/employes")
	public EmployeDto addEmploye(@RequestBody EmployeDto employe) {
		EmployeDto em = this.empServ.addEmploye(employe);
		return em;
	}
	
	@PutMapping(path = "/employes")
	public void putEmploye(@RequestBody EmployeDto employe) {
		this.empServ.putEmploye(employe);
	}
	
	@DeleteMapping(path = "/employes/{id}")
	public EmployeDto deleteEmploye(@PathVariable String id) {
		return this.empServ.deleteEmploye(Integer.parseInt(id));
	}

}
