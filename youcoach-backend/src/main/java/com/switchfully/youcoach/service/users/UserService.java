package com.switchfully.youcoach.service.users;

import com.switchfully.youcoach.domain.users.UserRepository;
import com.switchfully.youcoach.security.authentication.user.SecuredUser;
import com.switchfully.youcoach.security.authentication.user.SecuredUserRepository;
import com.switchfully.youcoach.security.authorization.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static com.switchfully.youcoach.service.users.UserDto.UserDtoBuilder.userDtoBuilder;

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

    public UserDto addUser(UserDto userDto) {
//        List<Role> rolesList = new ArrayList<>();
//        rolesList.add(Role.STUDENT);
        //SecuredUser newSecuredUser = new SecuredUser(userDto.getEmail(), userDto.getPassword(), rolesList);
        securedUserRepository.save(userDto.getSecuredUser());
//        UserDto userDto = userDtoBuilder()
//                .withId(userDto.getId())
//                .withFirstName(userDto.getFirstName())
//                .withLastName(userDto.getLastName())
//                .withEmail(userDto.getEmail())
//                .withSecuredId(securedId)
//                .build();
        //return userMapper.toDto(userRepository.save(userMapper.createUser(userDto)));
        return userDto;
    }

    public UserDto getUserById(UUID id) {
        return userMapper.toDto(userRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("The id " + id + " is not a valid id in our system. Try again?")));
    }

    public List<UserDto> getAllUsers() {
        return userMapper.toDto(userRepository.findAll());
    }
}
