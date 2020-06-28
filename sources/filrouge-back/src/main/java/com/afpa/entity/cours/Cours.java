package com.afpa.entity.cours;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.afpa.entity.personne.Eleve;

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
@ToString
@Builder
@Entity
public class Cours {
	
	@Id()
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name="nom", length=100)
	private String label;
	
	@Column(name="prix")
	private Integer prix;
	
	
	@ManyToOne
	private Matiere matiere;
	
	@ManyToMany(mappedBy = "listCours")
	private List<Eleve> listEleves;

}
