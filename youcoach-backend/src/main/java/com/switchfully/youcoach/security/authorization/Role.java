package com.switchfully.youcoach.security.authorization;

public enum Role {
    COACHEE("coachee"),
    COACH("coach"),
    ADMIN("admin");

    private String label;

    Role(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
