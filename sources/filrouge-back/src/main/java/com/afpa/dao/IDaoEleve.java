package com.afpa.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.afpa.entity.cours.Cours;
import com.afpa.entity.personne.Eleve;
@Repository
public interface IDaoEleve extends CrudRepository<Eleve, Integer> {

	@Transactional
	@Modifying
	@Query(value = "DELETE FROM cours_eleves where id_eleve = :id",nativeQuery = true)
	void supprdeLaListeDesCours(Integer id);

	Optional<Eleve> findById(int i);

	void deleteById(int id);
	
	@Query(value = "select * FROM cours_eleves where id_eleve = :id",nativeQuery = true)
	List<Cours> listeCoursById(int id);



}
