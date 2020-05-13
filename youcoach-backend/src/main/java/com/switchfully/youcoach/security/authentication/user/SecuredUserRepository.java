package com.switchfully.youcoach.security.authentication.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SecuredUserRepository extends CrudRepository<SecuredUser, Long> {
    SecuredUser findByUsername(String username);

    //Long save(SecuredUser securedUser);
}
