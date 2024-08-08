package io.codeforall.forsome.persistence.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "competition")
public class Competition extends AbstractModel{

    private String type;
    private String competitionName;
    @ManyToOne
    @JsonBackReference
    private Athlete athlete;
    private String time;
    private String award;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Athlete getAthlete() {
        return athlete;
    }

    public void setAthlete(Athlete athlete) {
        this.athlete = athlete;
    }

    public String getCompetitionName() {
        return competitionName;
    }

    public void setCompetitionName(String competitionName) {
        this.competitionName = competitionName;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getAward() {
        return award;
    }

    public void setAward(String award) {
        this.award = award;
    }
}
