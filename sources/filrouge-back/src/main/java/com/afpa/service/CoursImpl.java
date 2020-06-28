package com.afpa.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afpa.dao.IDaoCours;
import com.afpa.dao.IDaoEleve;
import com.afpa.dto.CoursDto;
import com.afpa.dto.EleveDto;
import com.afpa.dto.PersonneDto;
import com.afpa.entity.cours.Cours;
import com.afpa.entity.personne.Eleve;


@Service
public class CoursImpl implements ICoursService{
	
	@Autowired
	IDaoCours mesCours;
	
	@Autowired
	IDaoEleve eleveDao;
	
	
	@Override
	public String ajoutCours(CoursDto monCours) {
		
		this.mesCours.save(Cours.builder()
		 .label(monCours.getLabel())
		 .matiere(monCours.getMatiere())
		 .prix(monCours.getPrix())
		 .build());
		
		return "ok";
	}


	@Override
	public List<CoursDto> listeDesCours() {
		 List<Cours> maListe =  (List<Cours>) this.mesCours.findAll();
		 List<CoursDto> maListeDto =  maListe.stream().map(e -> CoursDto.builder()
				 .id(e.getId())
				 .label(e.getLabel())
				 .matiere(e.getMatiere())
				// .listEleves(e.getListEleves())
				 .prix(e.getPrix())
				 .build())
				 .collect(Collectors.toList());
		return maListeDto;
	}
	
	@Override
	public int nbrCours() {
		 List<Cours> maListe =  (List<Cours>) this.mesCours.findAll();
		 int nbr = maListe.size();
		return nbr;
	}

	@Override
	public CoursDto AfficherUnCours(CoursDto unCours) {
		Cours monCour = this.mesCours.findById(unCours.getId()).get();
		return CoursDto.builder()
				.id(monCour.getId())
				.label(monCour.getLabel())
				.matiere(monCour.getMatiere())
				.prix(monCour.getPrix())
				.build();
	}


	@Override
	public String ModifierUnCours(CoursDto unCours) {
		System.out.println("coucou");
		Cours monCour = this.mesCours.findById(unCours.getId()).get();
		monCour.setLabel(unCours.getLabel());
		monCour.setMatiere(unCours.getMatiere());
		monCour.setPrix(unCours.getPrix());
		this.mesCours.save(monCour);
		return "ok";
	}
	
	
	@Override
	public String SupprimerUnCours(CoursDto unCours) {
		this.mesCours.delete(this.mesCours.findById(unCours.getId()).get());
		return "ok";
	}


	@Override
	public List<PersonneDto> listeElevePourUnCours(CoursDto monCours) {
		Cours monCour = this.mesCours.findById(monCours.getId()).get();
		List<PersonneDto> mesEleve = monCour.getListEleves().stream()
				.map(e -> EleveDto.builder()
						.id(e.getId())
						.nom(e.getNom())
						.prenom(e.getPrenom())
						.dateNaissance(e.getDateNaissance())
						.build())
				.collect(Collectors.toList());
		return mesEleve;
	}

	@Override
	public void addEleveDansListe(int idC, int idE) {
		Cours co = this.mesCours.findById(idC).get();
		Eleve el = this.eleveDao.findById(idE).get();
		
		List <Cours> listCrsElve = el.getListCours();
		boolean test = true;
		for (Cours cours : listCrsElve) {
			System.out.println(el.getNom());
			if(cours == co) {
				test = false;
				break;
			}
		}
		if(test) {
			listCrsElve.add(co);
			this.eleveDao.save(el);
		}

		
	}
	
	@Override
	public void deleteEleveDansListe(int idC, int idE) {
		Cours co = this.mesCours.findById(idC).get();
		Eleve el = this.eleveDao.findById(idE).get();
		List <Cours> listCrsElve = el.getListCours();
		listCrsElve.remove(co);
		this.eleveDao.save(el);
		
	}
}
