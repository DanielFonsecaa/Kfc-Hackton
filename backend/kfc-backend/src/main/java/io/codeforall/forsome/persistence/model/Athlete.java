package io.codeforall.forsome.persistence.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "athlete")
public class Athlete extends AbstractModel{

    private String name;
    private String nationality;
    @OneToMany(
            cascade = {CascadeType.ALL},

            // make sure to remove accounts if unlinked from customer
            orphanRemoval = true,

            // user customer foreign key on account table to establish
            // the many-to-one relationship instead of a join table
            mappedBy = "athlete",

            // fetch accounts from database together with user
            fetch = FetchType.EAGER
    )
    private List<Competition> competitions = new ArrayList<>();
    private String imgLink;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public List<Competition> getCompetitions() {
        return competitions;
    }

    public void setCompetitions(List<Competition> competitions) {
        this.competitions = competitions;
    }

    public String getImgLink() {
        return imgLink;
    }

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

}
