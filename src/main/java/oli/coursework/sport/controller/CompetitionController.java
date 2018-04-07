/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.controller;

import oli.coursework.sport.exception.ResourceNotFoundException;
import oli.coursework.sport.model.Competition;
import oli.coursework.sport.repository.CompetitionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CompetitionController {

    @Autowired
    private CompetitionRepository competitionRepository;

    @GetMapping("/competitions")
    public List<Competition> getAllCompetitions(){
        return competitionRepository.findAll();
    }

    @PostMapping("/competitions")
    public Competition createCompetition(@Valid @RequestBody Competition competition) {
        return competitionRepository.save(competition);
    }

    @GetMapping("/competitions/{id}")
    public Competition getCompetitionById(@PathVariable(value = "id") Long competitionId) {
        return competitionRepository.findById(competitionId)
                .orElseThrow(() -> new ResourceNotFoundException("Gym", "id", competitionId));
    }

    @PutMapping("/competitions/{id}")
    public Competition updateCompetition(@PathVariable(value = "id") Long competitionId,
                                         @Valid @RequestBody Competition competitionDetails) {
        Competition competition = competitionRepository.findById(competitionId)
                .orElseThrow(() -> new ResourceNotFoundException("Gym", "id", competitionId));

        competition.setName(competitionDetails.getName());
        competition.setStartDate(competitionDetails.getStartDate());
        competition.setFinishDate(competitionDetails.getFinishDate());

        Competition updateCompetition = competitionRepository.save(competition);

        return updateCompetition;
    }

    @DeleteMapping("/competitions/{id}")
    public ResponseEntity<?> deleteCompetition(@PathVariable(name = "id") Long competitionId) {
        Competition competition = competitionRepository.findById(competitionId)
                .orElseThrow(() -> new ResourceNotFoundException("Gym", "id", competitionId));

        competitionRepository.delete(competition);

        return ResponseEntity.ok().build();
    }
}
