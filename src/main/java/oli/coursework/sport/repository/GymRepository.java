/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.repository;

import oli.coursework.sport.model.Gym;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GymRepository extends JpaRepository<Gym, Long> {
}
