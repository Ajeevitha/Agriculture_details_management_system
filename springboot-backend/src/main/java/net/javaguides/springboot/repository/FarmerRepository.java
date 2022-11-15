package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Farmer;

@Repository
public interface FarmerRepository extends JpaRepository<Farmer, Long>{

}
