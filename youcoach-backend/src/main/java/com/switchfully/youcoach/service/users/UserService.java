package com.switchfully.youcoach.service.users;

import com.switchfully.youcoach.api.users.UserController;
import com.switchfully.youcoach.domain.users.User;
import com.switchfully.youcoach.domain.users.UserRepository;
import com.switchfully.youcoach.security.authentication.user.SecuredUser;
import com.switchfully.youcoach.security.authentication.user.SecuredUserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

import static java.lang.StrictMath.abs;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final SecuredUserRepository securedUserRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, UserMapper userMapper, SecuredUserRepository securedUserRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.securedUserRepository = securedUserRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserDto addUser(UserDto userDto) throws IllegalArgumentException {
        PasswordValidation.checkString(userDto.getSecuredUser().getPassword());
        EmailValidation.validateEmail(userDto.getEmail());
        userDto.getSecuredUser().setPassword(passwordEncoder.encode(userDto.getSecuredUser().getPassword()));
        SecuredUser securedUser = new SecuredUser(userDto.getSecuredUser().getUsername(), userDto.getSecuredUser().getPassword(), userDto.getSecuredUser().getRoles());
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

    public UserDto getUserByMail(String mail) {
        if(userRepository.findAllByEmail(mail).isEmpty()){
            throw new IllegalArgumentException("the e-mail address does not exist");
        }
        else{
            return userMapper.toDto(userRepository.findAllByEmail(mail).get(0));}
    }


}

