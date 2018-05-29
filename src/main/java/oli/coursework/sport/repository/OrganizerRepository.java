/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.repository;

import oli.coursework.sport.model.Organizer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrganizerRepository extends JpaRepository<Organizer, Long> {

    List<Organizer> findByCompetitions_CompetitionId(Long competitionId);
}
