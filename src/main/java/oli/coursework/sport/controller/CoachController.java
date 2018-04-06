package oli.coursework.sport.controller;

import oli.coursework.sport.exception.ResourceNotFoundException;
import oli.coursework.sport.model.Coach;
import oli.coursework.sport.repository.CoachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CoachController {

    @Autowired
    private CoachRepository coachRepository;

    @GetMapping("/coaches")
    public List<Coach> getAllCoaches() {return coachRepository.findAll();}

    @PostMapping("/coaches")
    public Coach createCoach(@Valid @RequestBody Coach coach) {
        return coachRepository.save(coach);
    }

    @GetMapping("/coaches/{id}")
    public Coach getCoachById(@PathVariable(value = "id") Long coachId){
        return coachRepository.findById(coachId)
                .orElseThrow(() -> new ResourceNotFoundException("Coach", "id", coachId));
    }

    @PutMapping("/coaches/{id}")
    public Coach updateCoach(@PathVariable(value = "id") Long coachId,
                             @Valid @RequestBody Coach coachDetails) {
        Coach coach = coachRepository.findById(coachId)
                .orElseThrow(() -> new ResourceNotFoundException("Coach", "id", coachId));

        coach.setLastName(coachDetails.getLastName());
        coach.setFirstName(coachDetails.getFirstName());
        coach.setMiddleName(coachDetails.getMiddleName());
        coach.setBirthDate(coachDetails.getBirthDate());

        Coach updateCoach = coachRepository.save(coach);

        return updateCoach;
    }

    @DeleteMapping("/coaches/{id}")
    public ResponseEntity<?> deleteCoach(@PathVariable(value = "id") Long coachId) {
        Coach coach = coachRepository.findById(coachId)
                .orElseThrow(() -> new ResourceNotFoundException("Coach", "id", coachId));

        coachRepository.delete(coach);

        return ResponseEntity.ok().build();
    }
}
