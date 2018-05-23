/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.repository;

import oli.coursework.sport.model.Sportsman;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SportsmanRepository extends JpaRepository<Sportsman, Long> {

    @Query("select s from Sportsman s where s.sportsmanId = :arg")
    Sportsman getSportsmanBySportsmanId(@Param("arg") Long arg);

    List<Sportsman> findByCoaches_CoachId(Long coachId);

}
