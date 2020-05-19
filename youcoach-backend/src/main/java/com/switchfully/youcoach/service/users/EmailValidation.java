package com.switchfully.youcoach.service.users;


import com.switchfully.youcoach.domain.users.UserRepository;
import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.stereotype.Component;

@Component
public class EmailValidation {

    static UserRepository userRepository;

    public EmailValidation(UserRepository userRepository) {
        EmailValidation.userRepository = userRepository;
    }

    public static void validateEmail(String email) throws IllegalArgumentException {
        EmailValidator emailValidator = EmailValidator.getInstance();
        if (!emailValidator.isValid(email)) {
            throw new IllegalArgumentException("Invalid email address format.");
        }

        if (!userRepository.findAllByEmail(email).isEmpty()) {
            throw new IllegalArgumentException("Email already exists!");
        }

    }

    public static void validateEmailForUpdate(String email) {
        EmailValidator emailValidator = EmailValidator.getInstance();
        if (!emailValidator.isValid(email)) {
            throw new IllegalArgumentException("Invalid email address format.");
        }
    }
}
