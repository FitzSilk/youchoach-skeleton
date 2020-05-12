package com.switchfully.youcoach.security.authentication.user;

import org.springframework.data.jpa.repository.Query;

public interface SecuredUserRepository {
    SecuredUser findByUsername(String username);

    Long save(SecuredUser securedUser);
}
