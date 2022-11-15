package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Fertilizer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Fertilizer;

@Repository
public interface FertilizerRepository extends JpaRepository<Fertilizer, Long>{

}
