package com.afpa.entity.personne;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.SequenceGenerator;


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
public class Coefficient {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "coeff_seq")
	private int id;
	
	@Column
	private String label;
	
	@Column
	private Integer coefficient;
}
