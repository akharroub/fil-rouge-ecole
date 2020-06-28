package com.afpa.service;

import java.util.List;

import com.afpa.dto.ClasseDto;
import com.afpa.exceptions.CoursException;

public interface IClasseService {
	
	public String ajoutClasse(ClasseDto maClasse);
	
	public List<ClasseDto> listeDesClasses() throws CoursException;
	
	public ClasseDto AfficherUneClasse(ClasseDto maclass) throws CoursException;
	
	public String ModifierUneClasse(ClasseDto maclass);
	
	public String SupprimerUneClass(ClasseDto maclass);

	int nbrClasses();

}
