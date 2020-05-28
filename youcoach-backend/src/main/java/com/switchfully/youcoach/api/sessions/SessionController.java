package com.switchfully.youcoach.api.sessions;

import com.switchfully.youcoach.service.sessions.SessionDto;
import com.switchfully.youcoach.service.sessions.SessionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = SessionController.SESSION_RESOURCE_PATH)
public class SessionController {

    public static final String SESSION_RESOURCE_PATH = "/session";
    private final SessionService sessionService;
    private final Logger myLogger = LoggerFactory.getLogger(SessionController.class);

    @Autowired
    public SessionController(SessionService sessionService) {
        this.sessionService = sessionService;
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public SessionDto createCoachingSession(@RequestBody SessionDto sessionDto) {
        myLogger.info(sessionDto.getCoachee().getEmail() + " is trying to create a coaching session with " + sessionDto.getCoach().getEmail());
        SessionDto sessionDto1 = sessionService.save(sessionDto);
        myLogger.info(sessionDto.getCoachee().getEmail() + " has created a coaching session with " + sessionDto.getCoach().getEmail());
        return sessionDto1;
    }

    @PutMapping(consumes="application/json", produces= "application/json")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public SessionDto updateSessionStatus(@RequestBody SessionDto sessionDto) {
        myLogger.info(sessionDto.getCoachee().getEmail() + " is trying to update the status of a coaching session with " + sessionDto.getSession_id() + " - " + sessionDto.getStatus());
        SessionDto sessionDto1 = sessionService.update(sessionDto);
        myLogger.info(sessionDto.getCoachee().getEmail() + " has updated the status of a coaching session with " + sessionDto.getSession_id() + " - " + sessionDto.getStatus());
        return sessionDto1;
    }

    @GetMapping(produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public List<SessionDto> findAllSessions() {
        return sessionService.findAll();
    }

}
