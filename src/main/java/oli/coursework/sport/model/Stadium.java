/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cascade;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "stadium")
@EntityListeners(AuditingEntityListener.class)
public class Stadium implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stadium_id")
    private Long stadiumId;

    @Column(name = "name")
    private String name;

    @Column(name = "foundation_date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date foundationDate;

    @Column(name = "address")
    private String address;

    @Column(name = "capacity")
    private int capacity;

    @Column(name = "treadmill")
    private boolean treadmill;

    @JsonIgnore
    @ManyToMany(mappedBy = "stadiums")
    private List<Competition> competitions;

    public Stadium() {
    }

    public Stadium(String name, Date foundationDate, String address, int capacity, boolean treadmill, List<Competition> competitions) {
        this.name = name;
        this.foundationDate = foundationDate;
        this.address = address;
        this.capacity = capacity;
        this.treadmill = treadmill;
        this.competitions = competitions;
    }

    public Long getStadiumId() {
        return stadiumId;
    }

    public void setStadiumId(Long stadiumId) {
        this.stadiumId = stadiumId;
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

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public boolean isTreadmill() {
        return treadmill;
    }

    public void setTreadmill(boolean treadmill) {
        this.treadmill = treadmill;
    }

    public List<Competition> getCompetitions() {
        return competitions;
    }

    public void setCompetitions(List<Competition> competitions) {
        this.competitions = competitions;
    }
}
