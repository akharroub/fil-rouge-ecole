package com.afpa.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afpa.dao.IDaoMetier;
import com.afpa.dto.MetierDto;
import com.afpa.entity.metier.Metier;

@Service
public class MetierImpl implements IMetierService {
	
	@Autowired
	IDaoMetier mesMetiers;

	@Override
	public String ajoutMetier(MetierDto monMetier) {

		this.mesMetiers.save(Metier.builder()
				.label(monMetier.getLabel())
				.build());
		return "Le métier " + monMetier + "  a été ajouté";
	}

	@Override
	public List<MetierDto> listeDesMetiers() {
		List<Metier> maListe = (List<Metier>) this.mesMetiers.findAll();
		List<MetierDto> maListeDto = maListe.stream().map(e -> MetierDto.builder()
				.id(e.getId())
				.label(e.getLabel())
				.build())
				.collect(Collectors.toList());
		return maListeDto;
	}

	@Override
	public MetierDto AfficherUnMetier(int id) {
		Metier monMetier = this.mesMetiers.findById(id).get();
		return MetierDto.builder()
				.id(monMetier.getId())
				.label(monMetier.getLabel())
				.build();
	}

	@Override
	public String ModifierUnMetier(MetierDto unMetier) {
		Metier monMetier = this.mesMetiers.findById(unMetier.getId()).get();
		monMetier.setLabel(unMetier.getLabel());
		this.mesMetiers.save(monMetier);
		return "Le métier " + unMetier + "  est mis à jour";
	}

	@Override
	public String SupprimerUnMetier(int id) {
		this.mesMetiers.delete(this.mesMetiers.findById(id).get());
		return "Le métier est supprimé";
	}

	@Override
	public Integer nbrMetier() {
		return (int)this.mesMetiers.count();
	}

}
