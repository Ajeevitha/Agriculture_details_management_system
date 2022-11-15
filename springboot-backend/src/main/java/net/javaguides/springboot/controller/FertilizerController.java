package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.javaguides.springboot.repository.FertilizerRepository;
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
import net.javaguides.springboot.model.Fertilizer;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v3/")
public class FertilizerController {

    @Autowired
    private FertilizerRepository fertilizerRepository;

    // get all fertilizers
    @GetMapping("/fertilizer")
    public List<Fertilizer> getAllFertilizers(){
        return fertilizerRepository.findAll();
    }

    // create fertilizer rest api
    @PostMapping("/fertilizer")
    public Fertilizer createFertilizer(@RequestBody Fertilizer fertilizer) {
        return fertilizerRepository.save(fertilizer);
    }

    // get fertilizer by id rest api
    @GetMapping("/fertilizer/{id}")
    public ResponseEntity<Fertilizer> getFertilizerById(@PathVariable Long id) {
        Fertilizer fertilizer = fertilizerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Fertilizer not exist with id :" + id));
        return ResponseEntity.ok(fertilizer);
    }

    // update fertilizer rest api

    @PutMapping("/fertilizer/{id}")
    public ResponseEntity<Fertilizer> updateFertilizer(@PathVariable Long id, @RequestBody Fertilizer fertilizerdetails){
        Fertilizer fertilizer = fertilizerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Fertilizer not exist with id :" + id));

        fertilizer.setFertilizerName(fertilizer.getFertilizerName());
        fertilizer.setChemicalName(fertilizer.getChemicalName());
        fertilizer.setWeight(fertilizer.getWeight());

        Fertilizer updatedFertilizer = fertilizerRepository.save(fertilizer);
        return ResponseEntity.ok(updatedFertilizer);
    }

    // delete fertilizer rest api
    @DeleteMapping("/fertilizer/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteFertilizer(@PathVariable Long id){
        Fertilizer fertilizer = fertilizerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Fertilizer not exist with id :" + id));

        fertilizerRepository.delete(fertilizer);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
