/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "sportsman")
@EntityListeners(AuditingEntityListener.class)
//@JsonIdentityInfo(generator=ObjectIdGenerators.UUIDGenerator.class, property="@Id")
public class Sportsman implements Serializable {
    @Id
    @Column(name = "sportsman_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sportsmanId;

    @NotBlank
    @Column(name = "last_name")
    private String lastName;

    @NotBlank
    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "birth_date", nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    private Date birthDate;

    @ManyToMany(mappedBy = "sportsmen")
    @JsonIgnore
    private List<Coach> coaches;

    @ManyToMany(cascade = CascadeType.REMOVE)
    @JoinTable(name = "sportsman_has_kind_of_sport", joinColumns = @JoinColumn(name = "sportsman_sportsman_id", referencedColumnName = "sportsman_id"),
    inverseJoinColumns = @JoinColumn(name = "kind_of_sport_id", referencedColumnName = "id"))
    private List<SportKind> sportKinds;

    @ManyToOne
    @JoinColumn(name = "sport_club_sport_club_id", nullable = false)
    private SportClub sportClub;

    @JsonIgnore
    @ManyToMany(mappedBy = "sportsmen")
    private List<Competition> competitions;

    public Sportsman() {
    }

    public Sportsman(@NotBlank String lastName, @NotBlank String firstName, String middleName, Date birthDate, List<Coach> coaches, List<SportKind> sportKinds, SportClub sportClub, List<Competition> competitions) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.birthDate = birthDate;
        this.coaches = coaches;
        this.sportKinds = sportKinds;
        this.sportClub = sportClub;
        this.competitions = competitions;
    }

    public Long getSportsmanId() {
        return sportsmanId;
    }

    public void setSportsmanId(Long sportsmanId) {
        this.sportsmanId = sportsmanId;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public List<Coach> getCoaches() {
        return coaches;
    }

    public void setCoaches(List<Coach> coaches) {
        this.coaches = coaches;
    }

    public List<SportKind> getSportKinds() {
        return sportKinds;
    }

    public void setSportKinds(List<SportKind> sportKinds) {
        this.sportKinds = sportKinds;
    }

    public SportClub getSportClub() {
        return sportClub;
    }

    public void setSportClub(SportClub sportClub) {
        this.sportClub = sportClub;
    }

    public List<Competition> getCompetitions() {
        return competitions;
    }

    public void setCompetitions(List<Competition> competitions) {
        this.competitions = competitions;
    }
}
