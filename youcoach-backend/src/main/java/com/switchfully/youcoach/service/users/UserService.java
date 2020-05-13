package com.switchfully.youcoach.service.users;

import com.switchfully.youcoach.domain.users.UserRepository;
import com.switchfully.youcoach.security.authentication.user.SecuredUser;
import com.switchfully.youcoach.security.authentication.user.SecuredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.UUID;

import static java.lang.StrictMath.abs;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final SecuredUserRepository securedUserRepository;

    @Autowired
    public UserService(UserRepository userRepository, UserMapper userMapper, SecuredUserRepository securedUserRepository) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.securedUserRepository = securedUserRepository;
    }

    public UserDto addUser(UserDto userDto) throws IllegalArgumentException{
        PasswordValidation.checkString(userDto.getSecuredUser().getPassword());
        EmailValidation.validateCustomerEmail(userDto.getEmail());
        SecuredUser securedUser= new SecuredUser(userDto.getSecuredUser().getUsername(),userDto.getSecuredUser().getPassword(),userDto.getSecuredUser().getRoles());
        securedUserRepository.save(securedUser);
        userDto.setSecuredUser(securedUser);
        return userMapper.toDto(userRepository.save(userMapper.createUser(userDto)));

    }

    public UserDto getUserById(UUID id) {
        return userMapper.toDto(userRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("The id " + id + " is not a valid id in our system. Try again?")));
    }

    public List<UserDto> getAllUsers() {
        return userMapper.toDto(userRepository.findAll());
    }
}
