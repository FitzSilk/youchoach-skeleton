package com.switchfully.youcoach.domain.users;

import com.switchfully.youcoach.security.authentication.user.SecuredUser;

import javax.annotation.Nullable;
import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="u_id")
    private UUID id;

    @Column(name = "firstname")
    private String firstName;

    @Column(name = "lastname")
    private String lastName;

    @Column
    private String email;

    @OneToOne
    @JoinColumn(name = "secured_id")
    private SecuredUser securedUser;

    @Column (name="photo")
    @Nullable
    private String pictureUrl;

    @OneToOne
    @Nullable
    @JoinColumn(name = "coach_id")
    private Coach coach;


    public User() {
    }

    public User(UserBuilder userBuilder) {
        this.id = userBuilder.getId();
        this.firstName = userBuilder.getFirstName();
        this.lastName = userBuilder.getLastName();
        this.email = userBuilder.getEmail();
        this.securedUser = userBuilder.getSecuredUser();
        this.pictureUrl=userBuilder.getPictureUrl();
        this.coach = userBuilder.getCoach();
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

    public String getPictureUrl() {
        return pictureUrl;
    }

    @Nullable
    public Coach getCoach() {
        return coach;
    }

    public User setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public User setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public User setEmail(String email) {
        this.email = email;
        return this;
    }

    public static class UserBuilder {

        private UUID id;
        private String firstName;
        private String lastName;
        private String email;
        private SecuredUser securedUser;
        private String pictureUrl;
        private Coach coach;

        protected UserBuilder() {
        }

        public static UserBuilder userBuilder() {
            return new UserBuilder();
        }

        public User build() {
            return new User(this);
        }

        public UserBuilder withId(UUID id) {
            this.id = id;
            return this;
        }

        public UserBuilder withFirstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public UserBuilder withLastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public UserBuilder withEmail(String email) {
            this.email = email;
            return this;
        }


        public UserBuilder withSecuredUser(SecuredUser securedUser) {
            this.securedUser = securedUser;
            return this;
        }

        public UserBuilder withPicture(String pictureUrl) {
            this.pictureUrl = pictureUrl;
            return this;
        }

        public UserBuilder withCoach(Coach coach) {
            this.coach = coach;
            return this;
        }

        public String getPictureUrl() {
            return pictureUrl;
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

        public Coach getCoach() {
            return coach;
        }
    }
}
