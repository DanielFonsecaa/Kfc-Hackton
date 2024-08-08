package io.codeforall.forsome.service;

import io.codeforall.forsome.persistence.model.Athlete;

import java.util.List;

public interface AthleteService {

    Athlete get(Integer id);
    Athlete save(Athlete athlete);
    void delete(Integer id) throws Exception;
    List<Athlete> list();

}
