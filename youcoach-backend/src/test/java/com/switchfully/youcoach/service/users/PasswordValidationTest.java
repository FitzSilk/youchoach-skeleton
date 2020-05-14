package com.switchfully.youcoach.service.users;

import org.junit.jupiter.api.Test;

import static com.switchfully.youcoach.service.users.PasswordValidation.checkString;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;


class PasswordValidationTest {

    //password needs at least one number, one capital, one lower and must be at least 8 characters long.

    @Test
    void passwordWithLessThanEightCharacters_returnsIllegalArgumentException() {

        String shortPassword = "shO7t";

        assertThrows(IllegalArgumentException.class,() -> checkString(shortPassword));
    }

    @Test
    void passwordWithNoNumber_returnsIllegalArgumentException() {

        String shortPassword = "AllIsokbutNonumber";

        assertThrows(IllegalArgumentException.class,() -> checkString(shortPassword));
    }

    @Test
    void passwordWithNoCapital_returnsIllegalArgumentException() {

        String shortPassword = "allisokbutnocapital123";

        assertThrows(IllegalArgumentException.class,() -> checkString(shortPassword));
    }

    @Test
    void passwordWithNoLower_returnsIllegalArgumentException() {

        String shortPassword = "ALLISOKBUTNOLOWER123";

        assertThrows(IllegalArgumentException.class,() -> checkString(shortPassword));
    }

}
