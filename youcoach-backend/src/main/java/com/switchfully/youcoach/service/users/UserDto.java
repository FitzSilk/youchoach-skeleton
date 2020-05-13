package com.switchfully.youcoach.service.users;

import com.switchfully.youcoach.security.authentication.user.SecuredUser;

import java.util.UUID;

public class UserDto {

    private UUID id;
    private String firstName;
    private String lastName;
    private String email;
    private SecuredUser securedUser;
    private String pictureUrl;

    public UserDto() {
    }

    public UserDto(UserDtoBuilder userDtoBuilder) {
        this.id = userDtoBuilder.getId();
        this.firstName = userDtoBuilder.getFirstName();
        this.lastName = userDtoBuilder.getLastName();
        this.email = userDtoBuilder.getEmail();
        this.securedUser = userDtoBuilder.getSecuredUser();
        this.pictureUrl=userDtoBuilder.getPictureUrl();
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

    public SecuredUser getSecuredUser() {
        return securedUser;
    }

    public String getPictureUrl() { return pictureUrl; }

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

    public void setSecuredUser(SecuredUser securedUser) {
        this.securedUser = securedUser;
    }


    public static class UserDtoBuilder {
        private UUID id;
        private String firstName;
        private String lastName;
        private String email;
        private SecuredUser securedUser;
        private String pictureUrl;

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

        public UserDtoBuilder withSecuredId(SecuredUser securedUser) {
            this.securedUser = securedUser;
            return this;
        }

        public UserDtoBuilder withPictureUrl(String pictureUrl) {
            this.pictureUrl = pictureUrl;
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

        public SecuredUser getSecuredUser() {
            return securedUser;
        }

        public String getPictureUrl() { return pictureUrl; }
    }
}
