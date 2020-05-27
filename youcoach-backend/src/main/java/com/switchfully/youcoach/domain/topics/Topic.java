package com.switchfully.youcoach.domain.topics;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="topics")
public class Topic {
    @Id
    private Integer id;
    @Column
    private String topic;

    public Topic() {
    }

    public int getId() {
        return id;
    }

    public String getTopic() {
        return topic;
    }
}
