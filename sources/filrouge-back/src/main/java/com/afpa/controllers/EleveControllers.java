package com.afpa.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.afpa.dto.CoursDto;
import com.afpa.dto.EleveDto;
import com.afpa.exceptions.ElevesException;
import com.afpa.service.IEleveService;
import com.afpa.service.ITuteurService;

@RestController
public class EleveControllers {

	@Autowired
	IEleveService eleveServ;
	

	
	@PreAuthorize("hasAuthority('ADMIN')")
	@GetMapping(path = "/eleves")
	public List<EleveDto> JsonListeEleves() throws ElevesException {
		return this.eleveServ.listeEleves();	
	}
	
	@PreAuthorize("hasAuthority('USER')")
	@GetMapping(path = "/eleves2")
	public List<EleveDto> JsonListeEleves2() throws ElevesException {
		return this.eleveServ.listeEleves();	
	}
	
	@GetMapping(path = "/eleves/{id}")
	public EleveDto JsonElevesById(@PathVariable String id) throws ElevesException {
		return this.eleveServ.eleveById(Integer.parseInt(id));	
	}
	
	@GetMapping(path = "/eleves/cours/{id}")
	public List<CoursDto> coursEleve(@PathVariable String id) throws ElevesException {
		return this.eleveServ.coursListe(Integer.parseInt(id));	
	}
	
	
	@PostMapping(path = "/eleves")
	public EleveDto addEleve(@RequestBody EleveDto eleve) throws ElevesException {
		System.out.println(eleve.getNom());
		EleveDto el = this.eleveServ.addEleve(eleve);
		
		return el;
	}
	
	@PutMapping(path = "/eleves")
	public EleveDto putEleve(@RequestBody EleveDto eleve) throws ElevesException {
		return this.eleveServ.putEleve(eleve);
	}
	
	@GetMapping(path = "/eleves/total")
	public Integer totalEleves() throws ElevesException {
		return this.eleveServ.nbrEleve();
	}
	
	@PutMapping(path = "/listcours/{idE}/{idC}")
	public void putListCours(@PathVariable String idE, @PathVariable String idC) {
		this.eleveServ.addcours(Integer.parseInt(idE), Integer.parseInt(idC));
	}
	
	@DeleteMapping(path = "/listcours/{idE}/{idC}")
	public void delete(@PathVariable String idE, @PathVariable String idC) {
		this.eleveServ.deletecours(Integer.parseInt(idE), Integer.parseInt(idC));
	}
	
	@DeleteMapping(path = "/eleves/{id}")
	public EleveDto deleteEleve(@PathVariable String id) throws ElevesException {
		return this.eleveServ.deleteEleve(Integer.parseInt(id));
	}
	
}
