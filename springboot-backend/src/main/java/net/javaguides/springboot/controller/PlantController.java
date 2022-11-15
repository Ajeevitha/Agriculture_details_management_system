package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Plant;
import net.javaguides.springboot.repository.PlantRepository;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v2/")
public class PlantController {

    @Autowired
    private PlantRepository plantRepository;

    // get all plants
    @GetMapping("/plants")
    public List<Plant> getAllPlants(){
        return plantRepository.findAll();
    }

    private List<Plant> findAll() {
        return null;
    }

    // create plant rest api
    @PostMapping("/plant")
    public Plant createPlant(@RequestBody Plant plant) {
        return plantRepository.save(plant);
    }

    // get plant by id rest api
    @GetMapping("/plant/{id}")
    public ResponseEntity<Plant> getplantById(@PathVariable long id) {
        Plant plant = plantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("plant not exist with id :" + id));
        return ResponseEntity.ok(plant);
    }

    // update plant rest api

    @PutMapping("/plant/{id}")
    public ResponseEntity<Plant> updateplant(@PathVariable Long id, @RequestBody Plant plantDetails){
        Plant plant = plantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("plant not exist with id :" + id));

        plant.setPlantName(plantDetails.getPlantName());
        plant.setScientificName(plantDetails.getScientificName());
        plant.setSpecies(plantDetails.getSpecies());

        Plant updatedPlant = plantRepository.save(plant);
        return ResponseEntity.ok(updatedPlant);
    }

    // delete plant rest api
    @DeleteMapping("/plant/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteplant(@PathVariable Long id){
        Plant plant = plantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("plant not exist with id :" + id));

        plantRepository.delete(plant);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
