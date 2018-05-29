/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.controller;

import oli.coursework.sport.exception.ResourceNotFoundException;
import oli.coursework.sport.model.Sportsman;
import oli.coursework.sport.repository.SportsmanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class SportsmanController {

    @Autowired
    private SportsmanRepository sportsmanRepository;

    @GetMapping("/sportsmen-by-coach/{id}")
    public List<Sportsman> getSportsmenByCoachId(@PathVariable(value = "id") Long coachId) {
        return sportsmanRepository.findByCoaches_CoachId(coachId);
    }

    @GetMapping("/sportsmen-by-sport-club/{id}")
    public List<Sportsman> getSportsmenBySportClubId(@PathVariable(value = "id") Long sportClubId) {
        return sportsmanRepository.findBySportClub_SportClubId(sportClubId);
    }

    @GetMapping("/sportsmen-by-sport-kind/{id}")
    public List<Sportsman> getSportsmenBySportKindId(@PathVariable(value = "id") Long sportKindId) {
        return sportsmanRepository.findBySportKinds_Id(sportKindId);
    }

    @GetMapping("/sportsmen-order")
    public List<Sportsman> getSportsmenOrderAsc() {
        return sportsmanRepository.findByOrderByBirthDateAsc();
    }

    @GetMapping("/sportsmen/{id}")
    public Sportsman getById(@PathVariable(value = "id") Long sportsmanId) {
        return sportsmanRepository.findById(sportsmanId)
                .orElseThrow(() -> new ResourceNotFoundException("Sportsman", "id", sportsmanId));
    }

    @GetMapping("/sportsmen")
    public List<Sportsman> getAllSportsmen(){
        return sportsmanRepository.findAll();
    }

    @PostMapping("/sportsmen")
    public Sportsman createSportsman(@Valid @RequestBody Sportsman sportsman){
        return sportsmanRepository.save(sportsman);
    }

    @PutMapping("sportsmen/{id}")
    public Sportsman updateSportsman(@PathVariable(value = "id") Long sportsmanId,
                                     @Valid @RequestBody Sportsman sportsmanDetails){
        Sportsman sportsman = sportsmanRepository.findById(sportsmanId)
                .orElseThrow(() -> new ResourceNotFoundException("Sportsman", "id", sportsmanId));

        sportsman.setLastName(sportsmanDetails.getLastName());
        sportsman.setFirstName(sportsmanDetails.getFirstName());
        sportsman.setMiddleName(sportsmanDetails.getMiddleName());
        sportsman.setBirthDate(sportsmanDetails.getBirthDate());
        sportsman.setSportClub(sportsmanDetails.getSportClub());
        sportsman.setSportKinds(sportsmanDetails.getSportKinds());

        Sportsman updateSportsman = sportsmanRepository.save(sportsman);
        return updateSportsman;
    }

    @DeleteMapping("/sportsmen/{id}")
    public ResponseEntity<?> deleteSportsman(@PathVariable(value = "id") Long sportsmanId) {
        Sportsman sportsman = sportsmanRepository.findById(sportsmanId)
                .orElseThrow(() -> new ResourceNotFoundException("Sportsman", "id", sportsmanId));

        sportsmanRepository.delete(sportsman);

        return ResponseEntity.ok().build();
    }
}
