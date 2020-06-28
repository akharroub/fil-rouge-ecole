package com.afpa.service;

import java.util.List;

import com.afpa.dto.CoursDto;
import com.afpa.dto.EleveDto;

public interface IEleveService  {

	List<EleveDto> listeEleves();

	EleveDto eleveById(int i);

	EleveDto addEleve(EleveDto eleve);

	EleveDto putEleve(EleveDto eleve);

	EleveDto deleteEleve(int parseInt);

	void addcours(int idE, int idC);

	void deletecours(int idE, int idC);

	Integer nbrEleve();

	List<CoursDto> coursListe(int parseInt);

}
