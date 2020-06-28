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
import com.afpa.dto.CoursDto;
import com.afpa.dto.PersonneDto;
import com.afpa.service.ICoursService;

@RestController
public class CoursControllers {

	
	@Autowired
	ICoursService coursServ;
	
	

	@GetMapping(path = { "/listeCours"})
	public List<CoursDto> JsonListeCours() {
		return this.coursServ.listeDesCours();
		
	}
	
	@GetMapping(path = { "/nbrCours"})
	public int nbrsCours() {
		return this.coursServ.nbrCours();
		
	}
	
	@PostMapping(path = { "/ajoutCours"})
	public void ajoutCours(@RequestBody CoursDto courss) {
		this.coursServ.ajoutCours(courss);
	}
	
	
	
	@PutMapping(path = { "/updateCours"})
	public void updateUnCours(@RequestBody CoursDto courss) {
		this.coursServ.ModifierUnCours(courss);
	}
	
	@DeleteMapping(path = { "/supprimerUnCours/{id}"})
	public void deleteUnCours(@PathVariable String id) {
		CoursDto courss = new CoursDto();
		courss.setId(Integer.parseInt(id));
		this.coursServ.SupprimerUnCours(courss);
	}
	
	@GetMapping(path = { "/listeElevePourUnCours/{id}"})
	public List<PersonneDto> listeElevePourUnCours(@PathVariable String id) {
		CoursDto courss = new CoursDto();
		courss.setId(Integer.parseInt(id));
		return this.coursServ.listeElevePourUnCours(courss);
	}
	
	@GetMapping(path = {"/afficheUncours/{id}"})
	public CoursDto afficherUncours(@PathVariable String id) {
		CoursDto courss = new CoursDto();
		courss.setId(Integer.parseInt(id));
		return this.coursServ.AfficherUnCours(courss);
	}
	
	
	@PostMapping(path = {"/addElvsDansCours/{idE}/{idC}"})
	public void addElvCours(@PathVariable String idE, @PathVariable String idC) {
		this.coursServ.addEleveDansListe(Integer.parseInt(idC), Integer.parseInt(idE));
	}
	
	@DeleteMapping(path = {"/delElvsDansCours/{idE}/{idC}"})
	public void delElvCours(@PathVariable String idE, @PathVariable String idC) {
		
		this.coursServ.deleteEleveDansListe(Integer.parseInt(idC), Integer.parseInt(idE));
	}
	
	
}
