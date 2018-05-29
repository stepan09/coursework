/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.repository;

import oli.coursework.sport.model.Court;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourtRepository extends JpaRepository<Court, Long> {
}
