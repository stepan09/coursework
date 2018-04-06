/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.controller;

import oli.coursework.sport.exception.ResourceNotFoundException;
import oli.coursework.sport.model.Stadium;
import oli.coursework.sport.repository.StadiumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class StadiumController {

    @Autowired
    private StadiumRepository stadiumRepository;

    @GetMapping("/stadiums")
    public List<Stadium> getAllStadiums(){
        return stadiumRepository.findAll();
    }

    @PostMapping("/stadiums")
    public Stadium createStadium(@Valid @RequestBody Stadium stadium){
        return stadiumRepository.save(stadium);
    }

    public Stadium getStadiumById(@PathVariable(value = "id") Long stadiumId) {
        return stadiumRepository.findById(stadiumId)
                .orElseThrow(() -> new ResourceNotFoundException("Stadium", "id", stadiumId));
    }

    @PutMapping("/stadiums/{id}")
    public Stadium updateStadium(@PathVariable(value = "id") Long stadiumId,
                             @Valid @RequestBody Stadium stadiumDetails) {
        Stadium stadium = stadiumRepository.findById(stadiumId)
                .orElseThrow(() -> new ResourceNotFoundException("Stadium", "id", stadiumId));

        stadium.setName(stadiumDetails.getName());
        stadium.setFoundationDate(stadiumDetails.getFoundationDate());
        stadium.setAddress(stadiumDetails.getAddress());
        stadium.setCapacity(stadiumDetails.getCapacity());
        stadium.setTreadmill(stadiumDetails.isTreadmill());

        Stadium updateStadium = stadiumRepository.save(stadium);

        return updateStadium;
    }

    @DeleteMapping("/stadiums/{id}")
    public ResponseEntity<?> deleteStadium(@PathVariable(value = "id") Long stadiumId) {
        Stadium stadium = stadiumRepository.findById(stadiumId)
                .orElseThrow(() -> new ResourceNotFoundException("Stadium", "id", stadiumId));

        stadiumRepository.delete(stadium);

        return ResponseEntity.ok().build();
    }
}
