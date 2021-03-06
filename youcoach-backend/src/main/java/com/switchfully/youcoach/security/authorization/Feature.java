package com.switchfully.youcoach.security.authorization;

public enum Feature {
    REQUEST_SESSION("requestsession"),
    ACCEPT_SESSION("acceptsession"),
    ADMIN_VIEW("adminview");

    private String label;

    Feature(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
