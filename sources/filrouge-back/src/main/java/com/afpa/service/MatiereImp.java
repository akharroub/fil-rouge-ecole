package com.afpa.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afpa.dao.IDaoMatiere;
import com.afpa.dto.MatiereDto;
import com.afpa.entity.cours.Matiere;


@Service
public class MatiereImp implements IMatiereService{

	@Autowired
	IDaoMatiere mesMatieres;
	
	
	
	@Override
	public String ajoutMatiere(MatiereDto maMatiere) {
		this.mesMatieres.save(Matiere.builder()
		.label(maMatiere.getLabel())
		.build());
		return "ok";
	}


	
	@Override
	public List<MatiereDto> listeDesMatiere() {
		List<Matiere> maListe =  (List<Matiere>) this.mesMatieres.findAll();
		 List<MatiereDto> maListeDto =  maListe.stream().map(e -> MatiereDto.builder()
				 .id(e.getId())
				 .label(e.getLabel())
				 .build())
				 .collect(Collectors.toList());
		return maListeDto;
	}

	@Override
	public MatiereDto AfficherUneMatiere(MatiereDto maMat) {
		Matiere maMatiere = this.mesMatieres.findById(maMat.getId()).get();
		return MatiereDto.builder()
				.id(maMatiere.getId())
				.label(maMatiere.getLabel())
				.build();
	}

	@Override
	public String ModifierUneMatiere(MatiereDto maMat) {
		Matiere maMatiere = this.mesMatieres.findById(maMat.getId()).get();
		maMatiere.setLabel(maMat.getLabel());
		this.mesMatieres.save(maMatiere);
		return "ok";
	}

	@Override
	public String SupprimerUneMatiere(MatiereDto maMat) {
		this.mesMatieres.delete(this.mesMatieres.findById(maMat.getId()).get());
		return "ok";
	}



	@Override
	public int nbrClasses() {
		List<Matiere> maListe =  (List<Matiere>) this.mesMatieres.findAll();
		return maListe.size();
	}

}
