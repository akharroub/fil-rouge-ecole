package com.afpa.controllers;

import java.util.List;

import javax.swing.text.MaskFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.afpa.dto.ClasseDto;
import com.afpa.exceptions.CoursException;
import com.afpa.service.IClasseService;

@RestController
public class ClasseControllers {

	@Autowired
	IClasseService classServ;

	
	@GetMapping(path = { "/nbrClasses"})
	public int nbrsCours() {
		return this.classServ.nbrClasses();
		
	}

	@GetMapping(path = { "/listeClasses"})
	public List<ClasseDto> JsonListeCours() throws CoursException {
		return this.classServ.listeDesClasses();
		
	}
	
	@PostMapping(path = { "/ajoutClasses"})
	public void ajoutClasse(@RequestBody ClasseDto maclass) {
		//System.out.println(maclass);
		this.classServ.ajoutClasse(maclass);
	}
	
	
	
	@PutMapping(path = { "/updateClasses"})
	public void updateUneClasse(@RequestBody ClasseDto maclass) {
		this.classServ.ModifierUneClasse(maclass);
	}
	
	@DeleteMapping(path = { "/supprimerUneClasses/{id}"})
	public void deleteUneClasse(@PathVariable String id) {
		ClasseDto maclass = new ClasseDto();
		maclass.setId(Integer.parseInt(id));
		this.classServ.SupprimerUneClass(maclass);
	}
	
	


}
