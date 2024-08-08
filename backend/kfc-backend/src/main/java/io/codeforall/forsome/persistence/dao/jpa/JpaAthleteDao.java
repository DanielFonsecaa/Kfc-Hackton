package io.codeforall.forsome.persistence.dao.jpa;

import io.codeforall.forsome.persistence.dao.AthleteDao;
import io.codeforall.forsome.persistence.model.Athlete;
import org.springframework.stereotype.Repository;

@Repository
public class JpaAthleteDao extends GenericJpaDao<Athlete> implements AthleteDao {

    public JpaAthleteDao() {
        super(Athlete.class);
    }
}
