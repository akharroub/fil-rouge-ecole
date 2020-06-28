package com.afpa.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afpa.dao.IDaoCoefficient;
import com.afpa.dto.CoefficientDto;
import com.afpa.entity.personne.Coefficient;
@Service
public class CoefficientImplService implements ICoefficientService {
	
	@Autowired
	IDaoCoefficient cdao;
	
	@Autowired
	ModelMapper model;

	@Override
	public List<CoefficientDto> listeCoefficients() {
		List<CoefficientDto> mesCoefficients = ((List<Coefficient>)cdao.findAll())
				.stream()
				.map(e -> {
					CoefficientDto c = new CoefficientDto();
					c.setId(e.getId());
					c.setLabel(e.getLabel());
					c.setCoefficient(e.getCoefficient());
					return c;
				})
				.collect(Collectors.toList());
		return mesCoefficients;
	}

	@Override
	public CoefficientDto coefficientById(int i) {
		Coefficient c = cdao.findById(i).get();
		CoefficientDto cd = new CoefficientDto();
		cd.setId(c.getId());
		cd.setLabel(c.getLabel());
		cd.setCoefficient(c.getCoefficient());
		return cd;
	}

	@Override
	public CoefficientDto addCoefficient(CoefficientDto coefficient) {
		return model.map(cdao.save(model.map(coefficient, Coefficient.class)), CoefficientDto.class);
	}

	@Override
	public CoefficientDto putCoefficient(CoefficientDto coefficient) {
		Coefficient c = this.cdao.findById(coefficient.getId()).get();
		c.setLabel(coefficient.getLabel());
		c.setCoefficient(coefficient.getCoefficient());
		cdao.save(c);
		return null;
	}

	@Override
	public CoefficientDto deleteCoefficient(int parseInt) {
		cdao.deleteById(parseInt);
		return null;
	}

}
