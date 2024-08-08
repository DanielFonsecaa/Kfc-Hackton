package io.codeforall.forsome.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

public class AthleteDto {

    private Integer id;
    @NotNull(message = "Name is mandatory")
    @NotBlank(message = "Name is mandatory")
    @Size(min=3,max=64)
    private String name;
    @NotNull(message = "Nationality is mandatory")
    @NotBlank(message = "Nationality is mandatory")
    @Size(min=3,max=64)
    private String nationality;
    @NotNull(message = "LINK is mandatory")
    @NotBlank(message = "LINK is mandatory")
    private String imgLink;

    private List<CompetitionDto> competitions;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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

    public String getImgLink() {
        return imgLink;
    }

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

    public List<CompetitionDto> getCompetitions() {
        return competitions;
    }

    public void setCompetitions(List<CompetitionDto> competitions) {
        this.competitions = competitions;
    }
}
