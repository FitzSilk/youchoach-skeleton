package com.switchfully.youcoach.domain.sessions;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface SessionRepository extends CrudRepository<Session, UUID> {

    List<Session> findAll();
}
