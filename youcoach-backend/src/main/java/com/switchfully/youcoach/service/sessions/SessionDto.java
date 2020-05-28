package com.switchfully.youcoach.service.sessions;

import com.switchfully.youcoach.domain.sessions.Status;
import com.switchfully.youcoach.domain.users.User;

import java.util.Date;
import java.util.UUID;

public class SessionDto {

    private UUID session_id;
    private String subject;
    private String remarks;
    private String location;
    private Date date;
    private User coachee;
    private User coach;
    private Status status;

    public SessionDto(UUID session_id, String subject, String remarks, String location, Date date, User coachee, User coach, Status status) {
        this.session_id = session_id;
        this.subject = subject;
        this.remarks = remarks;
        this.location = location;
        this.date = date;
        this.coachee = coachee;
        this.coach = coach;
        this.status = status;
    }

    public SessionDto() {
    }

    public UUID getSession_id() {
        return session_id;
    }

    public String getSubject() {
        return subject;
    }

    public String getRemarks() {
        return remarks;
    }

    public String getLocation() {
        return location;
    }

    public Date getDate() {
        return date;
    }

    public User getCoachee() {
        return coachee;
    }

    public User getCoach() {
        return coach;
    }

    public Status getStatus() {
        return status;
    }
}
