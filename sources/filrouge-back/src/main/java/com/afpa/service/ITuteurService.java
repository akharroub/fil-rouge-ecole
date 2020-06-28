package com.afpa.service;

import java.util.List;

import com.afpa.dto.TuteurDto;

public interface ITuteurService {

	public TuteurDto deleteTuteur(int parseInt);

	public List<TuteurDto> listeTuteurs();

	public TuteurDto tuteurById(int parseInt);
	
	TuteurDto putTuteur(TuteurDto tuteur);

	public TuteurDto addTuteur(TuteurDto tuteur);

	void AddElevesListeTuteur(int idE, int idT);

	public Integer nbrTuteur();

}
