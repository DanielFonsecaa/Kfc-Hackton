package io.codeforall.forsome.service;

import io.codeforall.forsome.persistence.dao.CompetitionDao;
import io.codeforall.forsome.persistence.model.Competition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompetitionServiceImpl implements CompetitionService{

    private CompetitionDao competitionDao;

    @Autowired
    public void setCompetitionDao(CompetitionDao competitionDao) {
        this.competitionDao = competitionDao;
    }

    @Override
    public Competition get(Integer id) {
        return competitionDao.findById(id);
    }

    @Override
    public List<Competition> list() {
        return competitionDao.findAll();
    }

}
