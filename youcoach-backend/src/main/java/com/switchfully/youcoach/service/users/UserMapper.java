package com.switchfully.youcoach.service.users;

import com.switchfully.youcoach.domain.users.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.switchfully.youcoach.domain.users.User.UserBuilder.userBuilder;
import static com.switchfully.youcoach.service.users.UserDto.UserDtoBuilder.userDtoBuilder;

@Component
public class UserMapper {

    public UserDto toDto(User user) {
        return userDtoBuilder()
                .withId(user.getId())
                .withFirstName(user.getFirstName())
                .withLastName(user.getLastName())
                .withEmail(user.getEmail())
                .withSecuredId(user.getSecuredUser())
                .withPictureUrl(user.getPictureUrl())
                .withCoach(user.getCoach())
                .build();
    }

    public List<UserDto> toDto(List<User> users) {
        return users.stream().map(this::toDto).collect(Collectors.toList());
    }

    public List<UserDto> toDtoWithoutMail(List<User> users) {
        return users.stream().map(this::toDtoWithoutMail).collect(Collectors.toList());
    }

    public User createUser(UserDto userDto) {
        return userBuilder()
                .withId(UUID.randomUUID())
                .withFirstName(userDto.getFirstName())
                .withLastName(userDto.getLastName())
                .withEmail(userDto.getEmail())
                .withSecuredUser(userDto.getSecuredUser())
                .withPicture(userDto.getPictureUrl())
                .build();
    }

    public User toUser(UserDto userDto) {
        return userBuilder()
                .withId(userDto.getId())
                .withFirstName(userDto.getFirstName())
                .withLastName(userDto.getLastName())
                .withEmail(userDto.getEmail())
                .withSecuredUser(userDto.getSecuredUser())
                .withPicture(userDto.getPictureUrl())
                .withCoach(userDto.getCoach())
                .build();
    }

    public UserDto toDtoWithoutMail(User user) {
        return userDtoBuilder()
                .withId(user.getId())
                .withFirstName(user.getFirstName())
                .withLastName(user.getLastName())
                .withPictureUrl(user.getPictureUrl())
                .withCoach(user.getCoach())
                .build();
    }
}
