package com.afpa.dto;

import java.util.List;
import com.afpa.entity.cours.Matiere;
import com.afpa.entity.personne.Eleve;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class CoursDto {

	private int id;
	private String label;
	private Integer prix;
	private Matiere matiere;
	private List<Eleve> listEleves;
	
}
