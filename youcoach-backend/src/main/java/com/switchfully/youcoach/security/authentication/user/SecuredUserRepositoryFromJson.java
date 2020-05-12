package com.switchfully.youcoach.security.authentication.user;

import java.util.List;

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
        securedUser.setId(3L);
        securedUsers.add(securedUser);
        return securedUser.getId();
    }
}
