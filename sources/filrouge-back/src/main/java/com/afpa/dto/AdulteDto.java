package com.afpa.dto;

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
public class AdulteDto extends PersonneDto{

	public AdulteDto(String nom, String prenom) {
		super(nom, prenom);
	
	}

	//@Embedded
	private AdresseDto adress;
	private String numTel;
	private MetierDto metier;
	
		
}
