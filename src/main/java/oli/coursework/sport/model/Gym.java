/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "gym")
@EntityListeners(AuditingEntityListener.class)
public class Gym implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gym_id")
    private Long gymId;

    @Column(name = "name")
    private String name;

    @Column(name = "foundation_date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date foundationDate;

    @Column(name = "address")
    private String address;

    @JsonIgnore
    @ManyToMany(mappedBy = "gyms")
    private List<Competition> competitions;

    public Gym() {
    }

    public Gym(String name, Date foundationDate, String address, List<Competition> competitions) {
        this.name = name;
        this.foundationDate = foundationDate;
        this.address = address;
        this.competitions = competitions;
    }

    public Long getGymId() {
        return gymId;
    }

    public void setGymId(Long gymId) {
        this.gymId = gymId;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Competition> getCompetitions() {
        return competitions;
    }

    public void setCompetitions(List<Competition> competitions) {
        this.competitions = competitions;
    }
}
