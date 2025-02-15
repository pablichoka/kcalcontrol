package com.kCalControl.service;

import org.springframework.data.domain.Page;

import com.kCalControl.dto.credentials.UpdateCredentialsDTO;
import com.kCalControl.dto.user.NewUserDTO;
import com.kCalControl.dto.user.UpdateUserDataDTO;
import com.kCalControl.model.Credentials;
import com.kCalControl.model.User;

public interface UserService {
    User newUser(NewUserDTO dto);

    Credentials newCredentials(NewUserDTO dto);

    User returnUserById(Integer id);

    Page<User> getUsers(int page, int pageSize, String sort, String query, String sortBy);

//    Page<User> getUsersFromSearch(SearchParamsDTO dto);

    User updateUserData(Integer id, UpdateUserDataDTO dto);

    User updateCredentials(Integer id, UpdateCredentialsDTO dto);

    void deleteUser(Integer id);
}
