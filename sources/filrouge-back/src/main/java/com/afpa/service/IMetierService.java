package com.afpa.service;

import java.util.List;

import com.afpa.dto.MetierDto;

public interface IMetierService {

	public String ajoutMetier(MetierDto monMetier);
	
	public List<MetierDto> listeDesMetiers();
	
	public MetierDto AfficherUnMetier(int  id);
	
	public String ModifierUnMetier(MetierDto unMetier);
	
	public String SupprimerUnMetier(int id);
	
	public Integer nbrMetier();
	
}
