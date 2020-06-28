package com.afpa.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afpa.dao.IDaoCours;
import com.afpa.dao.IDaoEleve;
import com.afpa.dao.IDaoTuteur;
import com.afpa.dto.CoursDto;
import com.afpa.dto.EleveDto;
import com.afpa.entity.cours.Cours;
import com.afpa.entity.personne.Eleve;
import com.afpa.entity.personne.Tuteur;
 @Service
public class EleveImpl implements IEleveService {

	 @Autowired
	 IDaoEleve eleveDao;
	 @Autowired
	 IDaoTuteur tuteurDao;
	 @Autowired
	 IDaoCours coursDao;
	 
	@Autowired
	ITuteurService tuteurServ;
	 
	 @Autowired
	 ModelMapper model;
	 
	@Override
	public List<EleveDto> listeEleves() {
		List<EleveDto> mesEleve = ((List<Eleve>)eleveDao.findAll())
				.stream()
				.map(e -> { 
					EleveDto edto = new EleveDto();
					edto.setId(e.getId());
					edto.setNom(e.getNom());
					edto.setPrenom(e.getPrenom());
					return edto;
				}
				)
				.collect(Collectors.toList());
		
		return mesEleve;
	}

	@Override
	public EleveDto eleveById(int i) {
		Eleve el = eleveDao.findById(i).get();
		return model.map(el, EleveDto.class);
	}

	@Override
	public EleveDto addEleve(EleveDto eleve) {
		EleveDto e = model.map(eleveDao.save(model.map(eleve, Eleve.class)),EleveDto.class);
		this.tuteurServ.AddElevesListeTuteur(e.getId(), eleve.getTuteur().getId());
		return e;
		
		
	}

	@Override
	public EleveDto putEleve(EleveDto eleve) {
		
		Eleve el = this.eleveDao.findById(eleve.getId()).get();
		Tuteur tu = this.tuteurDao.findById(eleve.getTuteur().getId()).get();
		el.setNom(eleve.getNom());
		el.setPrenom(eleve.getPrenom());
		this.changetutu(el.getId(),el.getTuteur().getId(), tu.getId(), el);
		el.setTuteur(tu);
		eleveDao.save(el);
		return null;
	}

	@Override
	public EleveDto deleteEleve(int id) {
		Eleve el = this.eleveDao.findById(id).get();
		List<Eleve> liste = el.getTuteur().getEleves();
		liste.remove(el);
		eleveDao.supprdeLaListeDesCours(id);
		eleveDao.deleteById(id);
		return null;
	}
	
	//modifie la liste des tuteurs qui son conserné par le changment de tuteur de l'eleve fonctionne avec methode put eleve
	public void changetutu(int idE,int idT, int idTN, Eleve e) {
		List<Eleve> eL = this.tuteurDao.findById(idT).get().getEleves();
		boolean test = false;
		Eleve monEleve = null;
		for (Eleve eleve : eL) {
			if(eleve.getId() == idE) {
				monEleve = eleve;
				test =	true;
			}
		}
		if(test) {
			eL.remove(monEleve);
			if(test) {
				List<Eleve> newEleve = this.tuteurDao.findById(idTN).get().getEleves();
				newEleve.add(e);
			}
		}
	
	}
	
	//ajoute un  cours dans la liste de cours de l'élève
	@Override
	public void addcours(int idE, int idC) {
		System.out.println(idE + " " + idC);
		Eleve el = this.eleveDao.findById(idE).get();
		Cours co = this.coursDao.findById(idC).get();
		List<Cours> cours = el.getListCours();
		cours.add(co);
		this.eleveDao.save(el);
	}
	
	//supprime un  cours dans la liste de cours de l'élève
	@Override
		public void deletecours(int idE, int idC) {
			Eleve el = this.eleveDao.findById(idE).get();
			Cours co = this.coursDao.findById(idC).get();
			List<Cours> cours = el.getListCours();
			cours.remove(co);
			this.eleveDao.save(el);
		}

	@Override
	public Integer nbrEleve() {
		return (int) this.eleveDao.count();
	}

	@Override
	public List<CoursDto> coursListe(int id) {
		System.err.println("bonjour");
		List<Cours> c = eleveDao.listeCoursById(id);
		System.err.println(c);
		return null;
		
	}
	

}
