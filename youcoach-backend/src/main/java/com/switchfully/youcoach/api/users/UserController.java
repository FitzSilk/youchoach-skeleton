package com.switchfully.youcoach.api.users;

import com.switchfully.youcoach.service.users.UserDto;
import com.switchfully.youcoach.service.users.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = UserController.USER_RESOURCE_PATH)
public class UserController {

    public static final String USER_RESOURCE_PATH = "/user";
    private final UserService userService;
    private final Logger myLogger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public UserDto register(@RequestBody UserDto userDto) {
        myLogger.info("someone is trying to register");
        UserDto userDto1 = userService.addUser(userDto);
        myLogger.info("someone has registered: username " + userDto1.getFirstName() + " " + userDto1.getLastName() + " and userid: " + userDto1.getId());
        return userDto1;
    }

    @GetMapping(path = "/{id}", produces = "application/json")
    @PreAuthorize("hasAuthority('ADMIN_VIEW')")
    @ResponseStatus(HttpStatus.OK)
    public UserDto getUserById(@PathVariable UUID id) {
//        return userService.getUserById(id);
        myLogger.info("someone is trying to get user by id " + id);
        UserDto userDto1 = userService.getUserById(id);
        myLogger.info("someone accessed: username " + userDto1.getFirstName() + " " + userDto1.getLastName() + " and userid: " + userDto1.getId());
        return userDto1;
    }

    @PostMapping(path = "/myprofile", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public UserDto getUserIdByMail(@RequestBody String mail) {
        myLogger.info("someone is trying to get userinfo by this e-mailadres: " + mail);
        UserDto userDto1 = userService.getUserByMail(mail);
        myLogger.info("someone accessed: username " + userDto1.getFirstName() + " " + userDto1.getLastName() + " and userid: " + userDto1.getId());
        return userDto1;
    }

    @GetMapping(produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public List<UserDto> getAllUsers() {
        myLogger.info("someone is trying to get all users");
        List<UserDto> userDto1 = userService.getAllUsers();
        myLogger.info("someone accessed the list of users");
        return userDto1;
    }

    @ExceptionHandler(IllegalArgumentException.class)
    private void userNotFoundException(IllegalArgumentException ex, HttpServletResponse response) throws IOException {
        response.sendError(HttpServletResponse.SC_NOT_FOUND, ex.getMessage());
        myLogger.error("user not found.", ex);

    }
}
