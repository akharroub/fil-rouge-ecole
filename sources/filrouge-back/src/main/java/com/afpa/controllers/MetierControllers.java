
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

import com.afpa.dto.MetierDto;
import com.afpa.service.IMetierService;

@RestController
public class MetierControllers {

	@Autowired
	IMetierService metierServ;
	
	@GetMapping(path = { "/metiers" })
	public List<MetierDto> listeMetiers() {
		return this.metierServ.listeDesMetiers();
	}
	
	@GetMapping(path = { "/metiers/{id}" })
	public MetierDto afficherMetier(@PathVariable int id) {
		return this.metierServ.AfficherUnMetier(id);
	}
	
	@GetMapping(path = "/metiers/total")
	public Integer nbrMetier() {
		return this.metierServ.nbrMetier();
	}
	
	@GetMapping(path = { "/metiers/{id}/label" })
	public String afficherLabelMetier(@PathVariable int id) {
		return this.metierServ.AfficherUnMetier(id).getLabel();
	}
	
	@PostMapping(path = { "/metiers" })
	public void ajoutMetier(@RequestBody MetierDto metier) {
		this.metierServ.ajoutMetier(metier);
	}
	
	@PutMapping(path = { "/metiers" })
	public void updateUnMetier(@RequestBody MetierDto metier) {
		this.metierServ.ModifierUnMetier(metier);
	}
	
	@DeleteMapping(path = { "/metiers/{id}" })
	public void deleteUnMetier(@PathVariable int id) {
		this.metierServ.SupprimerUnMetier(id);
	}
}
//=======
//package com.afpa.controllers;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.afpa.dto.MetierDto;
//import com.afpa.service.IMetierService;
//
//@RestController
//public class MetierControllers {
//
//	@Autowired
//	IMetierService metierServ;
//	
//	@GetMapping(path = { "/listeMetier" })
//	public List<MetierDto> JsonListeCours() {
//		return this.metierServ.listeDesMetiers();
//	}
//	
//	@PostMapping(path = { "/ajoutMetier" })
//	public void ajoutMetier(@RequestBody MetierDto metier) {
//		this.metierServ.ajoutMetier(metier);
//		
//	}
//	
//	@PutMapping(path = { "/updateMetier" })
//	public void updateUnMetier(@RequestBody MetierDto metier) {
//		this.metierServ.SupprimerUnMetier(metier);
//	}
//	
//	@DeleteMapping(path = { "/supprimerUnMetier" })
//	public void deleteUnMetier(@RequestBody MetierDto metier) {
//		this.metierServ.SupprimerUnMetier(metier);
//	}
//}

