package com.switchfully.youcoach.api.users;

import com.switchfully.youcoach.service.users.UserDto;
import com.switchfully.youcoach.service.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
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
    @PreAuthorize("hasAuthority('ADMIN_VIEW')")
    @ResponseStatus(HttpStatus.OK)
    public UserDto getUserById(@PathVariable UUID id) {
        System.out.println("test with id: " + id);
        return userService.getUserById(id);
    }

    @PostMapping(path = "/myprofile", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public UserDto getUserIdByMail(@RequestBody String mail) {
        return userService.getUserByMail(mail);
    }

    @GetMapping(produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public List<UserDto> getAllUsers() {
        return userService.getAllUsers();
    }

}
