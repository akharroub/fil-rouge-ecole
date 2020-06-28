package com.afpa.entity.cours;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
public class Classe {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "classe_seq")
	private int id;
	
	@Column
	private String nom;
}
