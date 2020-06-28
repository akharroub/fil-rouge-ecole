package com.afpa.service;

import java.util.List;

import com.afpa.dto.CoursDto;
import com.afpa.dto.PersonneDto;

public interface ICoursService {

	
	public String ajoutCours(CoursDto monCours);
	
	public List<CoursDto> listeDesCours();
	
	public List<PersonneDto>listeElevePourUnCours(CoursDto monCours);
	
	public CoursDto AfficherUnCours(CoursDto unCours);
	
	public String ModifierUnCours(CoursDto unCours);
	
	public String SupprimerUnCours(CoursDto unCours);

	void addEleveDansListe(int idC, int idE);

	void deleteEleveDansListe(int idC, int idE);

	int nbrCours();
	
}
