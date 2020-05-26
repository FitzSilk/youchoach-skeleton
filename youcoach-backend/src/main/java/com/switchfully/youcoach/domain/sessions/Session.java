package com.switchfully.youcoach.domain.sessions;

import com.switchfully.youcoach.domain.users.User;

import javax.annotation.Nullable;
import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "sessions")
public class Session {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID session_id;

    @Column(name = "subject")
    private String subject;

    @Column(name = "remarks")
    @Nullable
    private String remarks;

    @Column(name = "location")
    private String location;

    @Column(name = "date")
    private Date date;

    @OneToOne
    @JoinColumn(name = "coachee_id")
    private User coachee;

    @OneToOne
    @JoinColumn(name = "coach_id")
    private User coach;

    public Session() {
    }

    public Session(UUID session_id, String subject, @Nullable String remarks, String location, Date date, User coachee, User coach) {
        this.session_id = session_id;
        this.subject = subject;
        this.remarks = remarks;
        this.location = location;
        this.date = date;
        this.coachee = coachee;
        this.coach = coach;
    }

    public UUID getSession_id() {
        return session_id;
    }

    public String getSubject() {
        return subject;
    }

    @Nullable
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
}
