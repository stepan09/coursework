/*
 * Copyright by Stepan Oliinyk (c) 2018.
 */

package oli.coursework.sport.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "kind_of_sport")
@EntityListeners(AuditingEntityListener.class)
public class SportKind implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank
    @Column(name = "name")
    private String name;

    @JsonIgnore
    @ManyToMany(mappedBy = "sportKinds")
    private List<Sportsman> sportsmen;

    @JsonIgnore
    @OneToMany(mappedBy = "sportKind", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<Competition> competitions;

    public SportKind() {
    }

    public SportKind(@NotBlank String name, List<Sportsman> sportsmen, List<Competition> competitions) {
        this.name = name;
        this.sportsmen = sportsmen;
        this.competitions = competitions;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
