package com.switchfully.youcoach.service.users;

import java.util.UUID;

public class CreateUserDto {

    private UUID id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Long securedId;

    public CreateUserDto() {
    }

    public CreateUserDto(CreateUserDtoBuilder createUserDtoBuilder) {
        this.id = createUserDtoBuilder.getId();
        this.firstName = createUserDtoBuilder.getFirstName();
        this.lastName = createUserDtoBuilder.getLastName();
        this.email = createUserDtoBuilder.getEmail();
        this.securedId = createUserDtoBuilder.getSecuredId();
        this.password = createUserDtoBuilder.getPassword();
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

    public String getPassword() {
        return password;
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

    public static class CreateUserDtoBuilder {
        private UUID id;
        private String firstName;
        private String lastName;
        private String email;
        private String password;
        private Long securedId;

        protected CreateUserDtoBuilder() {
        }

        public static CreateUserDtoBuilder userDtoBuilder() {
            return new CreateUserDtoBuilder();
        }

        public CreateUserDto build() {
            return new CreateUserDto(this);
        }

        public CreateUserDtoBuilder withId(UUID id) {
            this.id = id;
            return this;
        }

        public CreateUserDtoBuilder withFirstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public CreateUserDtoBuilder withLastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public CreateUserDtoBuilder withEmail(String email) {
            this.email = email;
            return this;
        }

        public CreateUserDtoBuilder withSecuredId(Long securedId) {
            this.securedId = securedId;
            return this;
        }

        public CreateUserDtoBuilder withPassword(String password) {
            this.password = password;
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

        public String getPassword() {
            return password;
        }
    }
}
