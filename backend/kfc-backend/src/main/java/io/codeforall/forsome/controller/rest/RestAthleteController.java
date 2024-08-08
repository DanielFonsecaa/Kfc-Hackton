package io.codeforall.forsome.controller.rest;

import io.codeforall.forsome.converters.AthleteToAthleteDto;
import io.codeforall.forsome.dto.AthleteDto;
import io.codeforall.forsome.persistence.model.Athlete;
import io.codeforall.forsome.service.AthleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/athlete")
public class RestAthleteController {

    private AthleteService athleteService;
    private AthleteToAthleteDto athleteToAthleteDto;

    @Autowired
    public void setAthleteService(AthleteService athleteService) {
        this.athleteService = athleteService;
    }

    @Autowired
    public void setAthleteToAthleteDto(AthleteToAthleteDto athleteToAthleteDto) {
        this.athleteToAthleteDto = athleteToAthleteDto;
    }

    @RequestMapping(method = RequestMethod.GET, path = {"/", ""})
    public ResponseEntity<List<AthleteDto>> listCustomers() {

        List<AthleteDto> athletes = athleteService.list().stream()
                .map(athlete -> athleteToAthleteDto.convert(athlete))
                .collect(Collectors.toList());

        return new ResponseEntity<>(athletes, HttpStatus.OK);
    }
}
