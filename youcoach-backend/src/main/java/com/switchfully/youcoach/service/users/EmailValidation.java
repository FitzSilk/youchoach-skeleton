package com.switchfully.youcoach.service.users;


import org.apache.commons.validator.routines.EmailValidator;

public class EmailValidation {



    public static void validateCustomerEmail(String email) throws IllegalArgumentException{
        EmailValidator emailValidator = EmailValidator.getInstance();
        if (!emailValidator.isValid(email)) {
            throw new IllegalArgumentException("Invalid email address format.");
        }
    }
}
