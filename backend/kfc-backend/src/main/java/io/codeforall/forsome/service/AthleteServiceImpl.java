package io.codeforall.forsome.service;

import io.codeforall.forsome.persistence.dao.AthleteDao;
import io.codeforall.forsome.persistence.model.Athlete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class AthleteServiceImpl implements AthleteService{

    private AthleteDao athleteDao;

    @Autowired
    public void setAthleteDao(AthleteDao athleteDao) {
        this.athleteDao = athleteDao;
    }

    @Override
    public Athlete get(Integer id) {
        return athleteDao.findById(id);
    }

    @Transactional
    @Override
    public Athlete save(Athlete athlete) {
        return athleteDao.saveOrUpdate(athlete);
    }

    @Transactional
    @Override
    public void delete(Integer id) throws Exception {
        Athlete athlete = Optional.ofNullable(athleteDao.findById(id))
                .orElseThrow(Exception::new);

        athleteDao.delete(id);
    }

    @Override
    public List<Athlete> list() {
        return athleteDao.findAll();
    }
}
