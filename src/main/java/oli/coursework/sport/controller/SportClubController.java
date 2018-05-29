/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.controller;

import oli.coursework.sport.exception.ResourceNotFoundException;
import oli.coursework.sport.model.SportClub;
import oli.coursework.sport.repository.SportClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class SportClubController {

    @Autowired
    private SportClubRepository sportClubRepository;

    @GetMapping("/sport-clubs")
    public List<SportClub> getAllSportClubs(){
        return sportClubRepository.findAll();
    }

    @PostMapping("/sport-clubs")
    public SportClub createSportClub(@Valid @RequestBody SportClub sportClub) {
        return sportClubRepository.save(sportClub);
    }


    public SportClub getSportClubById(@PathVariable(value = "id") Long sportClubId) {
        return sportClubRepository.findById(sportClubId)
                .orElseThrow(() -> new ResourceNotFoundException("Sport club", "id", sportClubId));
    }

    @PutMapping("/sport-clubs/{id}")
    public SportClub updateSportClub(@PathVariable(value = "id") Long sportClubId,
                                @Valid @RequestBody SportClub sportClubDetails) {
        SportClub sportClub = sportClubRepository.findById(sportClubId)
                .orElseThrow(() -> new ResourceNotFoundException("Sport club", "id", sportClubId));

        sportClub.setName(sportClubDetails.getName());
        sportClub.setFoundationDate(sportClubDetails.getFoundationDate());

        SportClub updateSportClub = sportClubRepository.save(sportClub);

        return updateSportClub;
    }

    @DeleteMapping("/sport-clubs/{id}")
    public ResponseEntity<?> deleteSportClub(@PathVariable(value = "id") Long sportClubId) {
        SportClub sportClub = sportClubRepository.findById(sportClubId)
                .orElseThrow(() -> new ResourceNotFoundException("Sport club", "id", sportClubId));

        sportClubRepository.delete(sportClub);

        return ResponseEntity.ok().build();
    }
}
