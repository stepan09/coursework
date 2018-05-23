/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "competition")
@EntityListeners(AuditingEntityListener.class)
public class Competition implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "competition_id")
    private Long competitionId;

    @Column(name = "name")
    @NotBlank
    private String name;

    @Column(name = "start_date", nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Column(name = "finish_date", nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    private Date finishDate;

    @ManyToOne
    @JoinColumn(name = "kind_of_sport_id", nullable = false)
    private SportKind sportKind;

    @ManyToMany(cascade = CascadeType.REMOVE)
    @JoinTable(name = "competition_has_sportsman", joinColumns = @JoinColumn(name = "competition_competition_id", referencedColumnName = "competition_id"),
    inverseJoinColumns = @JoinColumn(name = "sportsman_sportsman_id", referencedColumnName = "sportsman_id"))
    private List<Sportsman> sportsmen;

    @ManyToOne
    @JoinColumn(name = "organizer_organizer_id", nullable = false)
    private Organizer organizer;

    @ManyToMany(cascade = CascadeType.REMOVE)
    @JoinTable(name = "competition_has_stadium", joinColumns = @JoinColumn(name = "competition_competition_id", referencedColumnName = "competition_id"),
    inverseJoinColumns = @JoinColumn(name = "stadium_stadium_id", referencedColumnName = "stadium_id"))
    private List<Stadium> stadiums;


    @ManyToMany(cascade = CascadeType.REMOVE)
    @JoinTable(name = "competition_has_court", joinColumns = @JoinColumn(name = "competition_competition_id", referencedColumnName = "competition_id"),
            inverseJoinColumns = @JoinColumn(name = "court_court_id", referencedColumnName = "court_id"))
    private List<Court> courts;

    @ManyToMany(cascade = CascadeType.REMOVE)
    @JoinTable(name = "competition_has_gym", joinColumns = @JoinColumn(name = "competition_competition_id", referencedColumnName = "competition_id"),
            inverseJoinColumns = @JoinColumn(name = "gym_gym_id", referencedColumnName = "gym_id"))
    private List<Gym> gyms;

    public Competition() {
    }

    public Competition(@NotBlank String name, Date startDate, Date finishDate, SportKind sportKind, List<Sportsman> sportsmen, Organizer organizer, List<Stadium> stadiums, List<Court> courts, List<Gym> gyms) {
        this.name = name;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.sportKind = sportKind;
        this.sportsmen = sportsmen;
        this.organizer = organizer;
        this.stadiums = stadiums;
        this.courts = courts;
        this.gyms = gyms;
    }

    public Long getCompetitionId() {
        return competitionId;
    }

    public void setCompetitionId(Long competitionId) {
        this.competitionId = competitionId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(Date finishDate) {
        this.finishDate = finishDate;
    }

    public SportKind getSportKind() {
        return sportKind;
    }

    public void setSportKind(SportKind sportKind) {
        this.sportKind = sportKind;
    }

    public List<Sportsman> getSportsmen() {
        return sportsmen;
    }

    public void setSportsmen(List<Sportsman> sportsmen) {
        this.sportsmen = sportsmen;
    }

    public Organizer getOrganizer() {
        return organizer;
    }

    public void setOrganizer(Organizer organizer) {
        this.organizer = organizer;
    }

    public List<Stadium> getStadiums() {
        return stadiums;
    }

    public void setStadiums(List<Stadium> stadiums) {
        this.stadiums = stadiums;
    }

    public List<Court> getCourts() {
        return courts;
    }

    public void setCourts(List<Court> courts) {
        this.courts = courts;
    }

    public List<Gym> getGyms() {
        return gyms;
    }

    public void setGyms(List<Gym> gyms) {
        this.gyms = gyms;
    }
}
