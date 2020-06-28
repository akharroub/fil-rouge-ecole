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



import com.afpa.dto.TuteurDto;
import com.afpa.exceptions.ElevesException;
import com.afpa.service.ITuteurService;

@RestController
public class TuteurControllers {

	@Autowired
	ITuteurService tuteurServ;
	
	@GetMapping(path = "/tuteurs")
	public List<TuteurDto> JsonListeTuteur() throws ElevesException {
		return this.tuteurServ.listeTuteurs();	
	}
	
	@GetMapping(path = "/tuteurs/{id}")
	public TuteurDto JsonTuteurById(@PathVariable String id) throws ElevesException {
		return this.tuteurServ.tuteurById(Integer.parseInt(id));	
	}
	
	@GetMapping(path = "/tuteurs/total")
	public Integer nbrTuteur() throws ElevesException {
		return this.tuteurServ.nbrTuteur();	
	}
	
	@PostMapping(path = "/tuteurs")
	public TuteurDto addTuteur(@RequestBody TuteurDto tuteur) throws ElevesException {
		TuteurDto tu  = this.tuteurServ.addTuteur(tuteur);
		return tu;
	}
	
	
	@PutMapping(path = "/tuteursListEleve/{id}/{id2}")
	public void addTuteurEleve(@PathVariable String id,@PathVariable String id2) {
		this.tuteurServ.AddElevesListeTuteur(Integer.parseInt(id), Integer.parseInt(id2));
		
	}
	
	@PutMapping(path = "/tuteurs")
	public void putTuteur(@RequestBody TuteurDto tuteur) {
		this.tuteurServ.putTuteur(tuteur);
	}
	
	@DeleteMapping(path = "/tuteurs/{id}")
	public TuteurDto deleteTuteur(@PathVariable String id) throws ElevesException {
		return this.tuteurServ.deleteTuteur(Integer.parseInt(id));
	}
	
}
