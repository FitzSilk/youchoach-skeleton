package com.switchfully.youcoach.security.authentication.user;

import com.switchfully.youcoach.security.authorization.Role;
import org.hibernate.annotations.CollectionType;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="secured_users")
public class SecuredUser {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="su_id")
    private Long id;

    @Column
    private String username;

    @Column
    private String password;

    //private List<Role> roles;  // TO BE CLARIFIED
    @Column(name="coach")
    private Role roles;

    public SecuredUser(Long id, String username, String password, Role roles) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.roles = roles;
    }

    public SecuredUser(String username, String password, Role roles) {
        this.username = username;
        this.password = password;
        this.roles = roles;
    }

    public SecuredUser() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Role getRoles() {
        return roles;
    }

    public void setRoles(Role roles) {
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "SecuredUser{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public void encryptPassword(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(password);
    }
}
