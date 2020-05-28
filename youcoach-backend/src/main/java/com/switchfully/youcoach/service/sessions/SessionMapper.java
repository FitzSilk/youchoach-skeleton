package com.switchfully.youcoach.service.sessions;

import com.switchfully.youcoach.domain.sessions.Session;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class SessionMapper {

    public SessionDto toDto(Session session) {
        return new SessionDto(
                session.getSession_id(),
                session.getSubject(),
                session.getRemarks(),
                session.getLocation(),
                session.getDate(),
                session.getCoachee(),
                session.getCoach(),
                session.getStatus()
        );
    }

    public List<SessionDto> toDto(List<Session> sessionList) {
        return sessionList.stream().map(this::toDto).collect(Collectors.toList());
    }

    public Session toSession(SessionDto sessionDto) {
        return new Session(
                sessionDto.getSession_id(),
                sessionDto.getSubject(),
                sessionDto.getRemarks(),
                sessionDto.getLocation(),
                sessionDto.getDate(),
                sessionDto.getCoachee(),
                sessionDto.getCoach(),
                sessionDto.getStatus()
        );
    }
}
