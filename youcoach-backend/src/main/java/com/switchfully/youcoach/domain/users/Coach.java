package com.switchfully.youcoach.domain.users;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "coaches")
public class Coach {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "c_id")
    private UUID id;

    @Column(name = "informations")
    private String informations;

    @Column(name = "availability")
    private String availability;

    public Coach() {
    }

    public Coach(UUID id, String informations, String availability) {
        this.id = id;
        this.informations = informations;
        this.availability = availability;
    }

    public UUID getCoach_id() {
        return id;
    }

    public String getInformations() {
        return informations;
    }

    public String getAvailability() {
        return availability;
    }
}
