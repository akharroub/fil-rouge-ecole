package com.afpa.entity.personne;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.afpa.entity.cours.Cours;

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
@Entity
public class Eleve extends Personne{
	
	@ManyToOne
	@JoinColumn(name = "id_tuteur")
	private Tuteur tuteur;
	

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
        name = "cours_eleves", 
        joinColumns = { @JoinColumn(name = "id_eleve") }, 
        inverseJoinColumns = { @JoinColumn(name = "id_cours") }
    )
	private List<Cours> listCours;
}
