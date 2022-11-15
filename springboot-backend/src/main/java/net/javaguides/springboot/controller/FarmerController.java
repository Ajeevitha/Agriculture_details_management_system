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
import net.javaguides.springboot.model.Farmer;
import net.javaguides.springboot.repository.FarmerRepository;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class FarmerController {

	@Autowired
	private FarmerRepository farmerRepository;
	
	// get all farmers
	@GetMapping("/farmers")
	public List<Farmer> getAllFarmers(){
		return farmerRepository.findAll();
	}		
	
	// create farmer rest api
	@PostMapping("/farmers")
	public Farmer createFarmer(@RequestBody Farmer farmer) {
		return farmerRepository.save(farmer);
	}
	
	// get farmer by id rest api
	@GetMapping("/farmers/{id}")
	public ResponseEntity<Farmer> getFarmerById(@PathVariable Long id) {
		Farmer farmer = farmerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Farmer not exist with id :" + id));
		return ResponseEntity.ok(farmer);
	}
	
	// update farmer rest api
	
	@PutMapping("/farmers/{id}")
	public ResponseEntity<Farmer> updateFarmer(@PathVariable Long id, @RequestBody Farmer farmerDetails){
		Farmer farmer = farmerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Farmer not exist with id :" + id));
		
		farmer.setFirstName(farmerDetails.getFirstName());
		farmer.setLastName(farmerDetails.getLastName());
		farmer.setEmailId(farmerDetails.getEmailId());
		
		Farmer updatedFarmer = farmerRepository.save(farmer);
		return ResponseEntity.ok(updatedFarmer);
	}
	
	// delete farmer rest api
	@DeleteMapping("/farmers/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteFarmer(@PathVariable Long id){
		Farmer farmer = farmerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Farmer not exist with id :" + id));
		
		farmerRepository.delete(farmer);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
