package com.switchfully.youcoach.service.sessions;

import com.switchfully.youcoach.domain.sessions.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SessionService {

    private final SessionMapper sessionMapper;
    private final SessionRepository sessionRepository;

    @Autowired
    public SessionService(SessionMapper sessionMapper, SessionRepository sessionRepository) {
        this.sessionMapper = sessionMapper;
        this.sessionRepository = sessionRepository;
    }

    public SessionDto save(SessionDto sessionDto) {
        return sessionMapper.toDto(sessionRepository.save(sessionMapper.toSession(sessionDto)));
    }

    public List<SessionDto> findAll() {
        return sessionMapper.toDto(sessionRepository.findAll());
    }
}
