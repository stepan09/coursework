package oli.coursework.sport.repository;

import oli.coursework.sport.model.Coach;
import oli.coursework.sport.model.Sportsman;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CoachRepository extends JpaRepository<Coach, Long> {
    List<Coach> findBySportsmen_SportsmanId(Long sportsmanId);
}
