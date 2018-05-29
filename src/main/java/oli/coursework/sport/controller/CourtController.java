/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.controller;

import oli.coursework.sport.exception.ResourceNotFoundException;
import oli.coursework.sport.model.Court;
import oli.coursework.sport.repository.CourtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CourtController {

    @Autowired
    private CourtRepository courtRepository;

    @GetMapping("/courts")
    public List<Court> getAllCourts(){
        return courtRepository.findAll();
    }

    @PostMapping("/courts")
    public Court createCourt(@Valid @RequestBody Court court) {
        return courtRepository.save(court);
    }

    @GetMapping("/courts/{id}")
    public Court getCourtById(@PathVariable(value = "id") Long courtId) {
        return courtRepository.findById(courtId)
                .orElseThrow(() -> new ResourceNotFoundException("Court", "id", courtId));
    }

    @PutMapping("/courts/{id}")
    public Court updateCourt(@PathVariable(value = "id") Long courtId,
                              @Valid @RequestBody Court courtDetails) {
        Court court = courtRepository.findById(courtId)
                .orElseThrow(() -> new ResourceNotFoundException("Court", "id", courtId));

        court.setName(courtDetails.getName());
        court.setAddress(courtDetails.getAddress());
        court.setCoverType(courtDetails.getCoverType());
        court.setFoundationDate(courtDetails.getFoundationDate());

        Court updateCourt = courtRepository.save(court);

        return updateCourt;
    }

    @DeleteMapping("/courts/{id}")
    public ResponseEntity<?> deleteCourt(@PathVariable(value = "id") Long courtId) {
        Court court = courtRepository.findById(courtId)
                .orElseThrow(() -> new ResourceNotFoundException("Court", "id", courtId));

        courtRepository.delete(court);

        return ResponseEntity.ok().build();
    }
}
