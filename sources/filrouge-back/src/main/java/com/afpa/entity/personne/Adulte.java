package com.afpa.entity.personne;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import com.afpa.entity.metier.Metier;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@MappedSuperclass
public class Adulte extends Personne{

	public Adulte(String nom, String prenom) {
		super(nom, prenom);
	
	}

	@Embedded
	private Adresse adress;
	
	@Column(name="numtel")
	private String numTel;
	
	@ManyToOne
	private Metier metier;
}
