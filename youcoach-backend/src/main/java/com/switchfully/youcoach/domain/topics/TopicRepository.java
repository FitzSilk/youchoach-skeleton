package com.switchfully.youcoach.domain.topics;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TopicRepository extends CrudRepository <Topic, Integer>{

    List<Topic> findAll();
}
