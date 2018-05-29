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
@Table(name = "sport_club")
@EntityListeners(AuditingEntityListener.class)
public class SportClub implements Serializable {

    @Id
    @Column(name = "sport_club_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sportClubId;

    @NotBlank
    @Column(name = "name")
    private String name;

    @Column(name = "foundation_date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date foundationDate;

    @JsonIgnore
    @OneToMany(mappedBy = "sportClub", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<Sportsman> sportsmen;

    public SportClub() {
    }

    public SportClub(@NotBlank String name, Date foundationDate, List<Sportsman> sportsmen) {
        this.name = name;
        this.foundationDate = foundationDate;
        this.sportsmen = sportsmen;
    }

    public Long getSportClubId() {
        return sportClubId;
    }

    public void setSportClubId(Long sportClubId) {
        this.sportClubId = sportClubId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getFoundationDate() {
        return foundationDate;
    }

    public void setFoundationDate(Date foundationDate) {
        this.foundationDate = foundationDate;
    }

    public List<Sportsman> getSportsmen() {
        return sportsmen;
    }

    public void setSportsmen(List<Sportsman> sportsmen) {
        this.sportsmen = sportsmen;
    }
}
