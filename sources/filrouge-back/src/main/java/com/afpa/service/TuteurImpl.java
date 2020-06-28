package com.afpa.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afpa.dao.IDaoEleve;
import com.afpa.dao.IDaoTuteur;
import com.afpa.dto.AdresseDto;
import com.afpa.dto.EleveDto;
import com.afpa.dto.TuteurDto;
import com.afpa.entity.personne.Adresse;
import com.afpa.entity.personne.Eleve;
import com.afpa.entity.personne.Tuteur;
@Service
public class TuteurImpl implements ITuteurService {
	
	@Autowired
	IDaoTuteur tdao;
	
	@Autowired
	IDaoEleve edao;
	
	 @Autowired
	 ModelMapper model;
	

	@Override
	public List<TuteurDto> listeTuteurs() {
		List<TuteurDto> mesTuteurs = ((List<Tuteur>)tdao.findAll())
				.stream()
				.map(e -> {
					TuteurDto t = new TuteurDto();
					t.setId(e.getId());
					t.setPrenom(e.getPrenom());
					t.setNom(e.getNom());
					return t;
				})
				.collect(Collectors.toList());
		return mesTuteurs;
	}


	@Override
	public TuteurDto tuteurById(int i) {
		Tuteur e = tdao.findById(i).get();
		TuteurDto t = new TuteurDto();
		t.setId(e.getId());
		t.setPrenom(e.getPrenom());
		t.setNom(e.getNom());
		t.setDateNaissance(e.getDateNaissance());
		t.setAdress(AdresseDto.builder()
				.ville(e.getAdress().getVille())
				.codePostal(e.getAdress().getCodePostal())
				.pays(e.getAdress().getPays())
				.build());
		t.setEmail(e.getEmail());
		t.setNumTel(e.getNumTel());
		t.setDateNaissance(e.getDateNaissance());
		
		List<EleveDto> elevesDto = e.getEleves().stream()
		.map(ee-> {
			EleveDto ed = new EleveDto();
			ed.setId(ee.getId());
			ed.setPrenom(ee.getPrenom());
			ed.setNom(ee.getNom());
			return ed;
		})
		.collect(Collectors.toList());
		t.setEleve(elevesDto);
		return t;
	}


	@Override
	public TuteurDto addTuteur(TuteurDto tuteur) {
		return model.map(tdao.save(model.map(tuteur, Tuteur.class)),TuteurDto.class);
	}

	
	@Override
	public TuteurDto putTuteur(TuteurDto tuteur) {
		Tuteur tu = this.tdao.findById(tuteur.getId()).get();
		tu.setNom(tuteur.getNom());
		tu.setPrenom(tuteur.getPrenom());
		tu.setNumTel(tuteur.getNumTel());
		tu.setEmail(tuteur.getEmail());
		tu.setAdress(Adresse.builder()
				.rue(tuteur.getAdress().getRue())
				.ville(tuteur.getAdress().getVille())
				.codePostal(tuteur.getAdress().getCodePostal())
				.pays(tuteur.getAdress().getPays())
				.build());
		tdao.save(tu);
		return null;
	}
	
	
	@Override
	public void AddElevesListeTuteur(int idE, int idT) {
		Eleve e = this.edao.findById(idE).get();
		Tuteur tu = this.tdao.findById(idT).get();
		tu.getEleves().add(e);
		tdao.save(tu);
		
	}
	
	@Override
	public TuteurDto deleteTuteur(int parseInt) {
		tdao.deleteById(parseInt);
		return null;
	}


	@Override
	public Integer nbrTuteur() {
		return (int)this.tdao.count();
		}
}
