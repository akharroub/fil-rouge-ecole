package com.afpa.entity.personne;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString
@MappedSuperclass
public class Personne {
	@Id()
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name="nom", length=100)
	private String nom;
	
	@Column(name = "prenom", length=100)
	private String prenom;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "datenaissance")
	private Date dateNaissance;
	
	public Personne(String nom, String prenom) {
		super();
		this.nom = nom;
		this.prenom = prenom;
	}
}
