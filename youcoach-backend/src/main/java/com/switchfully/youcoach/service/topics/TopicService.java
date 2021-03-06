package com.switchfully.youcoach.service.topics;

import com.switchfully.youcoach.domain.topics.Topic;
import com.switchfully.youcoach.domain.topics.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TopicService {

    private TopicRepository topicRepository;
    @Autowired
    public TopicService(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    public List<String> getAllTopics() {
        return topicRepository.findAll()
                .stream()
                .map(topic -> topic.getTopic())
                .collect(Collectors.toList());
    }

}
