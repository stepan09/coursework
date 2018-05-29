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
@Table(name = "court")
@EntityListeners(AuditingEntityListener.class)
public class Court implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "court_id")
    private Long courtId;

    @Column(name = "name")
    private String name;

    @Column(name = "foundation_date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date foundationDate;

    @Column(name = "address")
    private String address;

    @Column(name = "cover_type")
    private String coverType;

    @JsonIgnore
    @ManyToMany(mappedBy = "courts")
    private List<Competition> competitions;

    public Court() {
    }

    public Court(String name, Date foundationDate, String address, String coverType, List<Competition> competitions) {
        this.name = name;
        this.foundationDate = foundationDate;
        this.address = address;
        this.coverType = coverType;
        this.competitions = competitions;
    }

    public Long getCourtId() {
        return courtId;
    }

    public void setCourtId(Long courtId) {
        this.courtId = courtId;
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

    public String getCoverType() {
        return coverType;
    }

    public void setCoverType(String coverType) {
        this.coverType = coverType;
    }

    public List<Competition> getCompetitions() {
        return competitions;
    }

    public void setCompetitions(List<Competition> competitions) {
        this.competitions = competitions;
    }
}
