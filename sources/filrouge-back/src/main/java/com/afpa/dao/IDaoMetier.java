package com.afpa.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.afpa.entity.metier.Metier;

@Repository
public interface IDaoMetier extends CrudRepository<Metier, Integer>{

	Optional<Metier> findById(int id);

}
