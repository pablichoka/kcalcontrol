package com.kCalControl.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.kCalControl.model.Credentials;

public interface CredentialsRepository extends CrudRepository<Credentials, Integer> {

    Optional<Credentials> findByUsername(String name);

}
