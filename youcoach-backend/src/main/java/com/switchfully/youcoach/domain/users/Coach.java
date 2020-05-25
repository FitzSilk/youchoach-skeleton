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

    @Column(name = "first_topic")
    private String firstTopic;

    @Column(name = "first_topic_classes")
    private String classesForFirstTopic;

    @Column(name = "second_topic")
    private String secondTopic;

    @Column(name = "second_topic_classes")
    private String classesForSecondTopic;

    public Coach() {
    }

    public Coach(UUID id, String informations, String availability, String firstTopic,
                 String classesForFirstTopic, String secondTopic, String classesForSecondTopic) {
        this.id = id;
        this.informations = informations;
        this.availability = availability;
        this.firstTopic = firstTopic;
        this.classesForFirstTopic = classesForFirstTopic;
        this.secondTopic = secondTopic;
        this.classesForSecondTopic = classesForSecondTopic;
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

    public UUID getId() {
        return id;
    }

    public String getFirstTopic() {
        return firstTopic;
    }

    public String getClassesForFirstTopic() {
        return classesForFirstTopic;
    }

    public String getSecondTopic() {
        return secondTopic;
    }

    public String getClassesForSecondTopic() {
        return classesForSecondTopic;
    }

    public void setInformations(String informations) {
        this.informations = informations;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }
}
