package com.afpa.dto;

import java.util.Date;
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
public class PersonneDto {
	private int id;
	private String nom;
	private String prenom;
	private Date dateNaissance;
	public PersonneDto(String nom, String prenom) {
		super();
		this.nom = nom;
		this.prenom = prenom;
	}
	
	
	
	
}
