package com.afpa.entity.metier;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import com.afpa.entity.personne.Adresse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class Centre {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "centre_seq")
	private int id;
	
	@Column
	private String label;
	
	@Embedded
	private Adresse adress;
}
