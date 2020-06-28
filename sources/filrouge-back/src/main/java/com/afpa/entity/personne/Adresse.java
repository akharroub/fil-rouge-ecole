package com.afpa.entity.personne;

import javax.persistence.Column;
import javax.persistence.Embeddable;


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
@Embeddable
public class Adresse {
	@Column(nullable = true)
	private String num;
	private String rue;
	private String ville;
	private Integer codePostal;
	private String pays;
}
