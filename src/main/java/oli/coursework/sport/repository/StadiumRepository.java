/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.repository;

import oli.coursework.sport.model.Stadium;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StadiumRepository extends JpaRepository<Stadium, Long> {

    List<Stadium> findAllByTreadmillTrue();
    List<Stadium> findAllByCapacityGreaterThan(Integer capacity);
    List<Stadium> findByOrderByCapacityAsc();
    List<Stadium> findByOrderByCapacityDesc();
}
