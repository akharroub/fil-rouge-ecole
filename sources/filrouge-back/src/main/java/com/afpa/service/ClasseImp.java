package com.afpa.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afpa.dao.IDaoClasse;
import com.afpa.dto.ClasseDto;
import com.afpa.entity.cours.Classe;
import com.afpa.exceptions.CoursException;

@Service
public class ClasseImp implements IClasseService{

	@Autowired
	IDaoClasse maClasseDao;


	@Override
	public String ajoutClasse(ClasseDto maClasse) {

		this.maClasseDao.save(Classe.builder()
				.nom(maClasse.getNom())
				.build());
		return "ok";
	}


	@Override
	public List<ClasseDto> listeDesClasses() throws CoursException {
		List<Classe> maListe = (List<Classe>) this.maClasseDao.findAll();
		List<ClasseDto> maListeDto = null;
		if(maListe == null) {
			throw new CoursException();
		}else {
			maListeDto =  maListe.stream().map(e -> ClasseDto.builder()
					.id(e.getId())
					.nom(e.getNom())
					.build())
					.collect(Collectors.toList());
			return maListeDto;
		}
	}

	@Override
	public ClasseDto AfficherUneClasse(ClasseDto maclass) throws CoursException {
		Classe maClasse = this.maClasseDao.findById(maclass.getId()).get();
		if(maClasse == null) {
			throw new CoursException();
		}else {
			
			return ClasseDto.builder()
					.id(maClasse.getId())
					.nom(maClasse.getNom())
					.build();
		}
	}

	@Override
	public String ModifierUneClasse(ClasseDto maclass) {
		Classe maClasse = this.maClasseDao.findById(maclass.getId()).get();
		maClasse.setNom(maclass.getNom());
		this.maClasseDao.save(maClasse);
		return "ok";
	}

	@Override
	public String SupprimerUneClass(ClasseDto maclass) {
		this.maClasseDao.delete(this.maClasseDao.findById(maclass.getId()).get());
		return "ok";
	}
	
	@Override
	public int nbrClasses() {
		List<Classe> maListe = (List<Classe>) this.maClasseDao.findAll();
		return maListe.size();
	}


}
