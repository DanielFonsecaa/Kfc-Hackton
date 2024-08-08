package io.codeforall.forsome.converters;

import io.codeforall.forsome.dto.CompetitionDto;
import io.codeforall.forsome.persistence.model.Competition;

public class CompetitionToCompetitionDto extends AbstractConverter<Competition, CompetitionDto> {
    @Override
    public CompetitionDto convert(Competition competition) {

        CompetitionDto competitionDto = new CompetitionDto();
        competitionDto.setId(competition.getId());
        competitionDto.setType(competition.getType());
        competitionDto.setCompetitionName(competition.getCompetitionName());
        competitionDto.setTime(competition.getTime());
        competitionDto.setAward(competition.getAward());

        return competitionDto;
    }
}
