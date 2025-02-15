package com.kCalControl.controller;

import com.kCalControl.dto.auth.AuthenticateRequestDTO;
import com.kCalControl.dto.auth.AuthenticateResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface AuthenticationController {
    @PostMapping("login")
    ResponseEntity<AuthenticateResponseDTO> authenticate(@RequestBody AuthenticateRequestDTO request);

}
