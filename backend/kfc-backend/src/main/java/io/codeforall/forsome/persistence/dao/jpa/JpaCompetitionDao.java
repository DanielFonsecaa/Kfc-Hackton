package io.codeforall.forsome.persistence.dao.jpa;

import io.codeforall.forsome.persistence.dao.CompetitionDao;
import io.codeforall.forsome.persistence.model.Competition;
import org.springframework.stereotype.Repository;

@Repository
public class JpaCompetitionDao extends GenericJpaDao<Competition> implements CompetitionDao {

    public JpaCompetitionDao() {
        super(Competition.class);
    }
}
