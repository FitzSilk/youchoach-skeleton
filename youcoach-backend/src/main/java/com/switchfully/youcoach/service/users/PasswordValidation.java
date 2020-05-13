package com.switchfully.youcoach.service.users;

public class PasswordValidation {

    public static void checkString(String str) throws IllegalArgumentException {
        char ch;
        boolean capitalFlag = false;
        boolean lowerCaseFlag = false;
        boolean numberFlag = false;
        if (str.length() < 8) {
            throw new IllegalArgumentException("your password needs to contain at least 8 characters");
        }
        for (int i = 0; i < str.length(); i++) {
            ch = str.charAt(i);
            if (Character.isDigit(ch)) {
                numberFlag = true;
            } else if (Character.isUpperCase(ch)) {
                capitalFlag = true;
            } else if (Character.isLowerCase(ch)) {
                lowerCaseFlag = true;
            }
        }
            if (numberFlag && capitalFlag && lowerCaseFlag) {
            } else {
                throw new IllegalArgumentException("Your password needs to contain at least 1 uppercase Letter, 1 lowercase Letter and 1 number");
            }
        }
    }

