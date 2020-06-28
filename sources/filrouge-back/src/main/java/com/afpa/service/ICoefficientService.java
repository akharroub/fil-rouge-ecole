package com.afpa.service;

import java.util.List;

import com.afpa.dto.CoefficientDto;

public interface ICoefficientService {

	public List<CoefficientDto> listeCoefficients();
	
	public CoefficientDto coefficientById(int parseInt);
	
	public CoefficientDto addCoefficient(CoefficientDto coefficient);

	CoefficientDto putCoefficient(CoefficientDto coefficient);
	
	public CoefficientDto deleteCoefficient(int parseInt);
	
}
