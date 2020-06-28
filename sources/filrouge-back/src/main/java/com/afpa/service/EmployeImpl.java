package com.afpa.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afpa.dao.IDaoEmploye;
import com.afpa.dto.AdresseDto;
import com.afpa.dto.EmployeDto;
import com.afpa.dto.MetierDto;
import com.afpa.entity.metier.Metier;
import com.afpa.entity.personne.Adresse;
import com.afpa.entity.personne.Employe;

@Service
public class EmployeImpl implements IEmployeService {
	
	@Autowired
	IDaoEmploye employeDao;
	
	@Autowired
	ModelMapper model;

	@Override
	public List<EmployeDto> listeEmployes() {
		List<EmployeDto> mesEmployes = ((List<Employe>)employeDao.findAll())
				.stream()
				.map(e -> {
					EmployeDto empdto = new EmployeDto();
					empdto.setId(e.getId());
					empdto.setPrenom(e.getPrenom());
					empdto.setNom(e.getNom());
					return empdto;
				})
				.collect(Collectors.toList());
		return mesEmployes;
	}

	@Override
	public EmployeDto employeById(int i) {
		Employe em = employeDao.findById(i).get();
		EmployeDto emdto = new EmployeDto();
		emdto.setId(em.getId());
		emdto.setNom(em.getNom());
		emdto.setPrenom(em.getPrenom());
		emdto.setDateNaissance(em.getDateNaissance());
		emdto.setNumTel(em.getNumTel());
		emdto.setEmail(em.getEmail());
		emdto.setAdress(AdresseDto.builder()
				.rue(em.getAdress().getRue())
				.ville(em.getAdress().getVille())
				.codePostal(em.getAdress().getCodePostal())
				.pays(em.getAdress().getPays())
				.build());
		emdto.setMetier(
				MetierDto.builder()
				.id(em.getMetier().getId())
				.label(em.getMetier().getLabel())
				.build());
		
		return emdto;
	}

	@Override
	public EmployeDto addEmploye(EmployeDto employe) {
		return model.map(employeDao.save(model.map(employe, Employe.class)), EmployeDto.class);
	}

	@Override
	public void putEmploye(EmployeDto employe) {
		Employe em = this.employeDao.findById(employe.getId()).get();
		System.out.println("coucou !");
		em.setNom(employe.getNom());
		em.setPrenom(employe.getPrenom());
		em.setNumTel(employe.getNumTel());
		em.setAdress(Adresse.builder()
				.rue(employe.getAdress().getRue())
				.ville(employe.getAdress().getVille())
				.codePostal(employe.getAdress().getCodePostal())
				.pays(employe.getAdress().getPays())
				.build());
		em.setMetier(Metier.builder()
				.id(employe.getMetier().getId())
				.label(employe.getMetier().getLabel())
				.build());
		employeDao.save(em);
	}

	@Override
	public EmployeDto deleteEmploye(int parseInt) {
		employeDao.deleteById(parseInt);
		return null;
	}

	@Override
	public Integer nbrEmploye() {
		return (int)this.employeDao.count();
	}
	
	

}
