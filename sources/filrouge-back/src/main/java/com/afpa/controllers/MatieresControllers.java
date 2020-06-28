package com.afpa.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.afpa.dto.ClasseDto;
import com.afpa.dto.MatiereDto;
import com.afpa.service.IMatiereService;

@RestController
public class MatieresControllers {

	
	@Autowired
	IMatiereService matiereServ;


	@GetMapping(path = { "/listeMatieres"})
	public List<MatiereDto> JsonListeCours() {
		return this.matiereServ.listeDesMatiere();
		
	}
	
	
	@GetMapping(path = { "/nbrMatieres"})
	public int nbrsCours() {
		return this.matiereServ.nbrClasses();
		
	}
	
	@PostMapping(path = { "/ajoutMatieres"})
	public void ajoutClasse(@RequestBody MatiereDto maMatiere) {
		this.matiereServ.ajoutMatiere(maMatiere);
	}
	
	
	
	@PutMapping(path = { "/updateMatiere"})
	public void updateUneClasse(@RequestBody MatiereDto maMatiere) {
		this.matiereServ.ModifierUneMatiere(maMatiere);
	}
	
	@DeleteMapping(path = { "/supprimerUneMatiere/{id}"})
	public void deleteUneClasse(@PathVariable String id) {
		MatiereDto maMatiere = new MatiereDto();
		maMatiere.setId(Integer.parseInt(id));
		this.matiereServ.SupprimerUneMatiere(maMatiere);
	}
	
	
	
}
