package com.switchfully.youcoach.api.users;

import com.switchfully.youcoach.service.users.UserDto;
import com.switchfully.youcoach.service.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Controller
@RequestMapping(path = UserController.USER_RESOURCE_PATH)
public class UserController {

    public static final String USER_RESOURCE_PATH = "/user";
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public UserDto register(@RequestBody UserDto userDto) {
        return userService.addUser(userDto);
    }

    @GetMapping(path = "/{id}", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public UserDto getUserById(@PathVariable UUID id) {
        return userService.getUserById(id);
    }
}
