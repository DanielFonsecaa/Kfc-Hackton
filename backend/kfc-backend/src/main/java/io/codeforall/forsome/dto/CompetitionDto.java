package io.codeforall.forsome.dto;

import javax.validation.constraints.*;

public class CompetitionDto {

    private Integer id;
    @NotNull(message = "Name is mandatory")
    @NotBlank(message = "Name is mandatory")
    @Size(min=3,max=64)
    private String type;
    @NotNull(message = "Name is mandatory")
    @NotBlank(message = "Name is mandatory")
    @Size(min=3,max=64)
    private String competitionName;
    @NotNull(message = "Name is mandatory")
    @NotBlank(message = "Name is mandatory")
    @Size(min=3,max=64)
    private String time;
    @NotNull(message = "Name is mandatory")
    @NotBlank(message = "Name is mandatory")
    @Size(min=3,max=64)
    private String award;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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
