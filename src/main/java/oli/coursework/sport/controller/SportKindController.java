/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.controller;

import oli.coursework.sport.exception.ResourceNotFoundException;
import oli.coursework.sport.model.SportKind;
import oli.coursework.sport.repository.SportKindRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class SportKindController {

    @Autowired
    private SportKindRepository sportKindRepository;

    @GetMapping("/sport-kinds")
    public List<SportKind> getAllSportKinds(){
        return sportKindRepository.findAll();
    }

    @PostMapping("/sport-kinds")
    public SportKind createSportKind(@Valid @RequestBody SportKind sportKind) {
        return sportKindRepository.save(sportKind);
    }

    @GetMapping("/sport-kinds/{id}")
    public SportKind getSportKidById(@PathVariable(value = "id") Long sportKindId) {
        return sportKindRepository.findById(sportKindId)
                .orElseThrow(() -> new ResourceNotFoundException("Sport kind", "id", sportKindId));
    }

    @PutMapping("sport-kinds/{id}")
    public SportKind updateSportKind(@PathVariable(value = "id") Long sportKindId,
                                     @Valid @RequestBody SportKind sportKindDetails) {
        SportKind sportKind = sportKindRepository.findById(sportKindId)
                .orElseThrow(() -> new ResourceNotFoundException("Sport kind", "id", sportKindId));

        sportKind.setName(sportKindDetails.getName());

        SportKind updateSportKind = sportKindRepository.save(sportKind);
        return updateSportKind;
    }

    @DeleteMapping("/sport-kinds/{id}")
    public ResponseEntity<?> deleteSportKind(@PathVariable(value = "id") Long sportKindId) {
        SportKind sportKind = sportKindRepository.findById(sportKindId)
                .orElseThrow(() -> new ResourceNotFoundException("Sport kind", "id", sportKindId));

        sportKindRepository.delete(sportKind);

        return ResponseEntity.ok().build();
    }

}
