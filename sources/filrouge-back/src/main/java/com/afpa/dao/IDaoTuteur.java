package com.afpa.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.afpa.entity.personne.Tuteur;
@Repository
public interface IDaoTuteur extends CrudRepository<Tuteur, Integer>{

	Optional<Tuteur> findById(int i);

}
