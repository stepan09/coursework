/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.controller;

import oli.coursework.sport.exception.ResourceNotFoundException;
import oli.coursework.sport.model.Organizer;
import oli.coursework.sport.repository.OrganizerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class OrganizerController {

    @Autowired
    private OrganizerRepository organizerRepository;

    @GetMapping("/organizers")
    public List<Organizer> getAllOrganizers(){
        return organizerRepository.findAll();
    }

    @GetMapping("/organizers-by-competition/{competitionId}")
    public List<Organizer> getOrganizersByCompetition(@PathVariable(value = "competitionId") Long competitionId) {
        return organizerRepository.findByCompetitions_CompetitionId(competitionId);
    }

    @PostMapping("/organizers")
    public Organizer createOrganizer(@Valid @RequestBody Organizer organizer) {
        return organizerRepository.save(organizer);
    }

    @GetMapping("/organizers/{id}")
    public Organizer getOrganizerById(@PathVariable(value = "id") Long organizerId) {
        return organizerRepository.findById(organizerId)
                .orElseThrow(() -> new ResourceNotFoundException("Organizer", "id", organizerId));

    }

    @PutMapping("/organizers/{id}")
    public Organizer updateOrganizer(@PathVariable(value = "id") Long organizerId,
                                     @Valid @RequestBody Organizer organizerDetails) {
        Organizer organizer = organizerRepository.findById(organizerId)
                .orElseThrow(() -> new ResourceNotFoundException("Organizer", "id", organizerId));

        organizer.setLastName(organizerDetails.getLastName());
        organizer.setFirstName(organizerDetails.getFirstName());
        organizer.setMiddleName(organizerDetails.getMiddleName());

        Organizer updateOrganizer = organizerRepository.save(organizer);

        return updateOrganizer;
    }

    @DeleteMapping("/organizers/{id}")
    public ResponseEntity<?> deleteOrganizer(@PathVariable(value = "id") Long organizerId) {
        Organizer organizer = organizerRepository.findById(organizerId)
                .orElseThrow(() -> new ResourceNotFoundException("Organizer", "id", organizerId));

        organizerRepository.delete(organizer);

        return ResponseEntity.ok().build();
    }
}
