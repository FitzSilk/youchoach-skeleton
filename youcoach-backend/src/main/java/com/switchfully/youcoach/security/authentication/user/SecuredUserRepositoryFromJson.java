package com.switchfully.youcoach.security.authentication.user;

import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.UUID;

import static java.lang.Math.abs;

public class SecuredUserRepositoryFromJson implements SecuredUserRepository {

    private List<SecuredUser> securedUsers;

    public SecuredUserRepositoryFromJson() {
    }

    public SecuredUserRepositoryFromJson(List<SecuredUser> securedUsers) {
        this.securedUsers = securedUsers;
    }

    @Override
    public SecuredUser findByUsername(String username) {
        return securedUsers.stream().filter(user -> user.getUsername().equals(username)).findFirst().orElse(null);
    }


    public UUID saveJson(SecuredUser securedUser) {
        securedUser.setId(UUID.randomUUID());
        securedUsers.add(securedUser);
        return securedUser.getId();
    }


    @Override
    public <S extends SecuredUser> S save(S entity) {
        return null;
    }

    @Override
    public <S extends SecuredUser> Iterable<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<SecuredUser> findById(UUID uuid) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(UUID uuid) {
        return false;
    }


    @Override
    public Iterable<SecuredUser> findAll() {
        return null;
    }

    @Override
    public Iterable<SecuredUser> findAllById(Iterable<UUID> iterable) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(UUID uuid) {
    }

    @Override
    public void delete(SecuredUser entity) {
    }

    @Override
    public void deleteAll(Iterable<? extends SecuredUser> entities) {
    }

    @Override
    public void deleteAll() {
    }
}
