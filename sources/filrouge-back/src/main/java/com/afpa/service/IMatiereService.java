package com.afpa.service;

import java.util.List;
import com.afpa.dto.MatiereDto;


public interface IMatiereService {
	
	
	public String ajoutMatiere(MatiereDto maMatiere);
	
	public List<MatiereDto> listeDesMatiere();
	
	public MatiereDto AfficherUneMatiere(MatiereDto maMat);
	
	public String ModifierUneMatiere(MatiereDto maMat);
	
	public String SupprimerUneMatiere(MatiereDto maMat);

	public int nbrClasses();

}
