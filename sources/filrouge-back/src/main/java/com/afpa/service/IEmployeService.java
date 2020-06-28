package com.afpa.service;

import java.util.List;

import com.afpa.dto.EmployeDto;

public interface IEmployeService {

	List<EmployeDto> listeEmployes();
	
	EmployeDto employeById(int i);
	
	EmployeDto addEmploye(EmployeDto employe);
	
	void putEmploye(EmployeDto employe);
	
	EmployeDto deleteEmploye(int parseInt);
	
	public Integer nbrEmploye();
}
