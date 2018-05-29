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
@Table(name = "coach")
@EntityListeners(AuditingEntityListener.class)
//@JsonIdentityInfo(generator=ObjectIdGenerators.UUIDGenerator.class, property="@Id")
public class Coach implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "coach_id")
    private Long coachId;

    @NotBlank
    @Column(name = "last_name")
    private String lastName;

    @NotBlank
    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "birth_date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date birthDate;

    @ManyToMany(cascade = CascadeType.REMOVE)
    @JoinTable(name = "coach_has_sportsman", joinColumns = @JoinColumn(name = "coach_coach_id", referencedColumnName = "coach_id"),
            inverseJoinColumns = @JoinColumn(name = "sportsman_sportsman_id", referencedColumnName = "sportsman_id"))
    private List<Sportsman> sportsmen;

    public Coach() {
    }

    public Coach(@NotBlank String lastName, @NotBlank String firstName, String middleName, Date birthDate, List<Sportsman> sportsmen) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.birthDate = birthDate;
        this.sportsmen = sportsmen;
    }

    public Long getCoachId() {
        return coachId;
    }

    public void setCoachId(Long coachId) {
        this.coachId = coachId;
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

    public List<Sportsman> getSportsmen() {
        return sportsmen;
    }

    public void setSportsmen(List<Sportsman> sportsmen) {
        this.sportsmen = sportsmen;
    }
}
