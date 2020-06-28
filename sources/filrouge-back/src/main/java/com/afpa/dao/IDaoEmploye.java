package com.afpa.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.afpa.entity.personne.Employe;

@Repository
public interface IDaoEmploye extends CrudRepository<Employe, Integer>{

	
	
}
