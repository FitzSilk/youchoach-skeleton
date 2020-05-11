package com.switchfully.youcoach.service.users;

import com.switchfully.youcoach.domain.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Autowired
    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public UserDto addUser(UserDto userDto) {
        return userMapper.toDto(userRepository.save(userMapper.createUser(userDto)));
    }

    public UserDto getUserById(UUID id) {
        return userMapper.toDto(userRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("The id " + id + " is not a valid id in our system. Try again?")));
    }

}
