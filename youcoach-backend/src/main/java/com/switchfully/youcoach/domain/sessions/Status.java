package com.switchfully.youcoach.domain.sessions;

public enum Status {
    PENDING("pending"),
    ACCEPTED("accepted"),
    DECLINED("declined"),
    WAITING_FEEDBACK("waiting_feedback"),
    DONE("done");

    private String label;

    Status(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
