package com.afpa.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.afpa.entity.cours.Classe;

@Repository
public interface IDaoClasse extends CrudRepository<Classe, Integer>{

	Optional<Classe> findById(int id);

	
	
}
