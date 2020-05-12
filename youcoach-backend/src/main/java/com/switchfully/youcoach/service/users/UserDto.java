package com.switchfully.youcoach.service.users;

import java.util.UUID;

public class UserDto {

    private UUID id;
    private String firstName;
    private String lastName;
    private String email;
    private Long securedId;

    public UserDto() {
    }

    public UserDto(UserDtoBuilder userDtoBuilder) {
        this.id = userDtoBuilder.getId();
        this.firstName = userDtoBuilder.getFirstName();
        this.lastName = userDtoBuilder.getLastName();
        this.email = userDtoBuilder.getEmail();
        this.securedId = userDtoBuilder.getSecuredId();
    }

    public UUID getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public Long getSecuredId() {
        return securedId;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSecuredId(Long securedId) {
        this.securedId = securedId;
    }

    public static class UserDtoBuilder {
        private UUID id;
        private String firstName;
        private String lastName;
        private String email;
        private Long securedId;

        protected UserDtoBuilder() {
        }

        public static UserDtoBuilder userDtoBuilder() {
            return new UserDtoBuilder();
        }

        public UserDto build() {
            return new UserDto(this);
        }

        public UserDtoBuilder withId(UUID id) {
            this.id = id;
            return this;
        }

        public UserDtoBuilder withFirstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public UserDtoBuilder withLastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public UserDtoBuilder withEmail(String email) {
            this.email = email;
            return this;
        }

        public UserDtoBuilder withSecuredId(Long securedId) {
            this.securedId = securedId;
            return this;
        }

        public UUID getId() {
            return id;
        }

        public String getFirstName() {
            return firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public String getEmail() {
            return email;
        }

        public Long getSecuredId() {
            return securedId;
        }
    }
}
