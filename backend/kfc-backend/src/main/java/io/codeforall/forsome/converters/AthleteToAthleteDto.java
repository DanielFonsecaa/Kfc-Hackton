package io.codeforall.forsome.converters;

import io.codeforall.forsome.dto.AthleteDto;
import io.codeforall.forsome.persistence.model.Athlete;
import org.springframework.stereotype.Component;

@Component
public class AthleteToAthleteDto extends AbstractConverter<Athlete, AthleteDto>{

    @Override
    public AthleteDto convert(Athlete athlete) {

        CompetitionToCompetitionDto converter = new CompetitionToCompetitionDto();

        AthleteDto athleteDto = new AthleteDto();
        athleteDto.setId(athlete.getId());
        athleteDto.setName(athlete.getName());
        athleteDto.setNationality(athlete.getNationality());
        athleteDto.setImgLink(athlete.getImgLink());
        athleteDto.setCompetitions(converter.convert(athlete.getCompetitions()));

        return athleteDto;
    }
}
