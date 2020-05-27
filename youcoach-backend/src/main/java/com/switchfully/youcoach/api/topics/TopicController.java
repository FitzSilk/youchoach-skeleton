package com.switchfully.youcoach.api.topics;


import com.switchfully.youcoach.api.users.UserController;
import com.switchfully.youcoach.domain.topics.Topic;
import com.switchfully.youcoach.service.topics.TopicService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping(path = TopicController.TOPIC_RESOURCE_PATH)
public class TopicController {
    private TopicService topicService;
    public static final String TOPIC_RESOURCE_PATH = "/topic";
    private final Logger myLogger = LoggerFactory.getLogger(TopicController.class);

    @Autowired
    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    @GetMapping(produces = "application/json")
    @ResponseStatus(HttpStatus.OK)

    public List<String> getAllTopics() {
        myLogger.info("Get topics");
        return topicService.getAllTopics();
    }
}
