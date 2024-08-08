package io.codeforall.forsome.service;

import io.codeforall.forsome.persistence.model.Competition;

import java.util.List;

public interface CompetitionService {

    Competition get(Integer id);
    List<Competition> list();

}
