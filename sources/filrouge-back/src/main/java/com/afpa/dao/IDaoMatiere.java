package com.afpa.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.afpa.entity.cours.Matiere;

@Repository
public interface IDaoMatiere extends CrudRepository<Matiere, Integer>{

	Optional<Matiere> findById(int id);
	
	
	

}
