package com.afpa.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.afpa.entity.cours.Cours;

@Repository
public interface IDaoCours extends CrudRepository<Cours, Integer> {

	Optional<Cours> findById(int id);

}
