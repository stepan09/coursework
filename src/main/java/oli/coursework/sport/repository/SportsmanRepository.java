/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.repository;

import oli.coursework.sport.model.Sportsman;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SportsmanRepository extends JpaRepository<Sportsman, Long> {

    List<Sportsman> findByCoaches_CoachId(Long coachId);

    List<Sportsman> findBySportKinds_Id(Long sportKindId);

    List<Sportsman> findBySportClub_SportClubId(Long sportClubId);

    List<Sportsman> findByOrderByBirthDateAsc();
}
