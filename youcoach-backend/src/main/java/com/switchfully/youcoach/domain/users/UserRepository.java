package com.switchfully.youcoach.domain.users;

import com.switchfully.youcoach.security.authorization.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends CrudRepository<User, UUID> {

    List<User> findAll();

    List<User> findAllByEmail(String email);

    List<User> findAllBySecuredUser_Roles(Role role);

}
