package com.switchfully.youcoach.service.sessions;

import com.switchfully.youcoach.domain.sessions.Session;
import com.switchfully.youcoach.domain.sessions.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

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

    public SessionDto update(SessionDto sessionDto) {
        Session session1 = sessionRepository.findById(
                sessionDto.getSession_id()).orElseThrow(() -> new IllegalArgumentException("No session with that id."));
        session1.setStatus(sessionDto.getStatus());
        return sessionMapper.toDto(sessionRepository.save(session1));
    }

    public List<SessionDto> findAllByCoacheeId(UUID id) {
        return sessionMapper.toDto(sessionRepository.findAllByCoachee_Id(id));
    }

    public List<SessionDto> findAllByCoachId(UUID id) {
        return sessionMapper.toDto(sessionRepository.findAllByCoach_Id(id));
    }
}
