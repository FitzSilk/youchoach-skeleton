package com.switchfully.youcoach.security.authentication.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SecuredUserRepository extends CrudRepository<SecuredUser, UUID> {
    SecuredUser findByUsername(String username);

}
