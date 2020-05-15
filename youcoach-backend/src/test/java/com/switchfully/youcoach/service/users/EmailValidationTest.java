package com.switchfully.youcoach.service.users;

import org.junit.jupiter.api.Test;

import static com.switchfully.youcoach.service.users.EmailValidation.validateEmail;
import static org.junit.jupiter.api.Assertions.*;

class EmailValidationTest {
    //EmailValidator emailValidator = EmailValidator.getInstance();

    @Test
    void badlyFormattedEmailAddress_returnsIllegalArgumentException() {
        String badEmailAddress1 = "test@test";
        Exception thrown = assertThrows(IllegalArgumentException.class, () -> {validateEmail(badEmailAddress1);});

        assertEquals("Invalid email address format.",thrown.getMessage() );
    }
}
