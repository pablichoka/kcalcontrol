package com.kCalControl.controller.impl;

import com.kCalControl.config.Checker;
import com.kCalControl.controller.UserController;
import com.kCalControl.dto.credentials.UpdateCredentialsDTO;
import com.kCalControl.dto.user.NewUserDTO;
import com.kCalControl.dto.user.RetrieveUserDTO;
import com.kCalControl.dto.user.RetrieveUsersDTO;
import com.kCalControl.dto.user.UpdateUserDataDTO;
import com.kCalControl.exceptions.NetworkException;
import com.kCalControl.model.Assets;
import com.kCalControl.model.User;
import com.kCalControl.repository.UserRepository;
import com.kCalControl.service.AssetsService;
import com.kCalControl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.logging.Logger;

@Service
public class UserControllerImpl implements UserController {

    private static final Logger logger = Logger.getLogger(UserControllerImpl.class.getName());
    private final UserRepository userRepository;
    private final Checker checker;
    private final UserService userService;
    private final AssetsService assetsService;

    @Autowired
    public UserControllerImpl(UserRepository userRepository, Checker checker, UserService userService, AssetsService assetsService) {
        this.userRepository = userRepository;
        this.checker = checker;
        this.userService = userService;
        this.assetsService = assetsService;
    }

    @Override
    public ResponseEntity<String> createUser(NewUserDTO dto) {
        User newUser = userService.newUser(dto);
        Integer userId;
        if(userRepository.getLastId() == null){
            userId = 1;
        }else{
            userId = userRepository.getLastId()+1;
        }
        newUser.setId(userId);
        newUser.setAssets(new Assets(userId, Date.from(Instant.now()), userId, Date.from(Instant.now())));
        newUser.getBmData().setAssets(new Assets(userId, Date.from(Instant.now()), userId, Date.from(Instant.now())));
        newUser.getCredentials().setAssets(new Assets(userId, Date.from(Instant.now()), userId, Date.from(Instant.now())));
        userRepository.save(newUser);
        return ResponseEntity.ok("User created successfully %d".formatted(userId));
    }

    @Override
    public ResponseEntity<RetrieveUserDTO> getUserData(Integer id) {
        logger.info("User data requested: " + checker.checkGrantedUser(1));
        if (!checker.checkGrantedUser(id)) {
            throw new NetworkException("Valid user check failed", HttpStatus.FORBIDDEN);
        } else if (!checker.checkUserExistsById(id)) {
            throw new NetworkException("User %d does not exits".formatted(id), HttpStatus.NOT_FOUND);
        }
        User user = userService.returnUserById(id);
        RetrieveUserDTO response = new RetrieveUserDTO(user.getUsername(), user.getFirstName(), user.getLastName(), user.getMobile(), user.getEmail(), assetsService.returnAssets(user.getAssets()));
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<String> deleteUser(Integer id) {
        if (!checker.checkUserExistsById(id) || !checker.checkGrantedUser(id)) {
            throw new NetworkException("Valid user check failed", HttpStatus.FORBIDDEN);
        }
        userService.deleteUser(id);
        return ResponseEntity.ok("User deleted successfully");
    }

    @Override
    public ResponseEntity<String> updateUserData(Integer id, UpdateUserDataDTO dto) {
        if (!checker.checkUserExistsById(id) && !checker.checkGrantedUser(id)) {
            throw new NetworkException("Valid user check failed", HttpStatus.FORBIDDEN);
        }
        User updatedUser = userService.updateUserData(id, dto);
        userRepository.save(updatedUser);

        return ResponseEntity.ok("User data updated successfully");
    }

    @Override
    public ResponseEntity<String> updateCredentials(Integer id, UpdateCredentialsDTO dto) {
        if (!checker.checkUserExistsById(id) || !checker.checkGrantedUser(id)) {
            throw new NetworkException("Valid user check failed", HttpStatus.FORBIDDEN);
        }
        User updatedUser = userService.updateCredentials(id, dto);
        userRepository.save(updatedUser);
        return ResponseEntity.ok("Password updated successfully");
    }

    @Override
    public ResponseEntity<RetrieveUsersDTO> getUsers(Integer page, Integer size, String sort, String query, String searchBy) {
        if (!checker.checkRoleAdmin()) {
            throw new NetworkException("Missing ADMIN role", HttpStatus.FORBIDDEN);
        }
        Page<User> usersList = userService.getUsers(page, size, sort, query, searchBy);
        logger.info("User search list: " + usersList.toString());
        RetrieveUsersDTO response = new RetrieveUsersDTO(usersList.getNumberOfElements(), usersList.getContent().stream().map(user -> new RetrieveUserDTO(user.getUsername(), user.getFirstName(), user.getLastName(), user.getMobile(), user.getEmail(), assetsService.returnAssets(user.getAssets()))).toList());
        return ResponseEntity.ok(response);
    }

//    @Override
//    public ResponseEntity<RetrieveUsersDTO> getUsersFromSearch(SearchParamsDTO dto) {
//        if (!checker.checkRoleAdmin()) {
//            throw new NetworkException("Missing ADMIN role", HttpStatus.FORBIDDEN);
//        }
//        Page<User> userSearchList = userService.getUsersFromSearch(dto);
//        RetrieveUsersDTO response = new RetrieveUsersDTO(userSearchList.getNumberOfElements(), userSearchList.getContent().stream().map(user -> new RetrieveUserDTO(user.getUsername(), user.getName(), user.getMobile(), user.getEmail(), assetsService.returnAssets(user.getAssets()))).toList());
//        return ResponseEntity.ok(response);
//    }

}
