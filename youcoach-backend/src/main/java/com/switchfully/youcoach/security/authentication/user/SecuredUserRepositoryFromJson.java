package com.switchfully.youcoach.security.authentication.user;

import java.util.List;
import java.util.Random;

import static java.lang.Math.abs;

public class SecuredUserRepositoryFromJson implements SecuredUserRepository {
    private List<SecuredUser> securedUsers;

    public SecuredUserRepositoryFromJson(List<SecuredUser> securedUsers) {
        this.securedUsers = securedUsers;
    }

    @Override
    public SecuredUser findByUsername(String username) {
        return securedUsers.stream().filter(user -> user.getUsername().equals(username)).findFirst().orElse(null);
    }

    @Override
    public Long save(SecuredUser securedUser) {
        securedUser.setId(abs(new Random().nextLong()));
        securedUsers.add(securedUser);
        return securedUser.getId();
    }
}
