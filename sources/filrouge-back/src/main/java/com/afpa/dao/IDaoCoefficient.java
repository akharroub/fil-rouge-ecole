package com.afpa.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.afpa.entity.personne.Coefficient;

@Repository
public interface IDaoCoefficient extends CrudRepository<Coefficient, Integer> {
	

}
