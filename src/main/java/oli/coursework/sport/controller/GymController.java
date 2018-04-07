/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.controller;

import oli.coursework.sport.exception.ResourceNotFoundException;
import oli.coursework.sport.model.Gym;
import oli.coursework.sport.repository.GymRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class GymController {

    @Autowired
    private GymRepository gymRepository;

    @GetMapping("/gyms")
    public List<Gym> getAllGyms(){
        return gymRepository.findAll();
    }

    @PostMapping("/gyms")
    public Gym createGym(@Valid @RequestBody Gym gym) {
        return gymRepository.save(gym);
    }

    @GetMapping("/gyms/{id}")
    public Gym getGymById(@PathVariable(value = "id") Long gymId) {
        return gymRepository.findById(gymId)
                .orElseThrow(() -> new ResourceNotFoundException("Gym", "id", gymId));
    }

    @PutMapping("/gyms/{id}")
    public Gym updateGym(@PathVariable(value = "id") Long gymId,
                         @Valid @RequestBody Gym gymDetails) {
        Gym gym = gymRepository.findById(gymId)
                .orElseThrow(() -> new ResourceNotFoundException("Gym", "id", gymId));

        gym.setName(gymDetails.getName());
        gym.setAddress(gymDetails.getAddress());
        gym.setFoundationDate(gymDetails.getFoundationDate());

        Gym updateGym = gymRepository.save(gym);

        return updateGym;
    }

    @DeleteMapping("/gyms/{id}")
    public ResponseEntity<?> deleteGym(@PathVariable(value = "id") Long gymId) {
        Gym gym = gymRepository.findById(gymId)
                .orElseThrow(() -> new ResourceNotFoundException("Gym", "id", gymId));

        gymRepository.delete(gym);

        return ResponseEntity.ok().build();
    }

}
