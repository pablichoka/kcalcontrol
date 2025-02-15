package com.kCalControl.exceptions;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public class NetworkException extends RuntimeException{

    private final HttpStatus httpStatus;

    public NetworkException(String message, HttpStatus httpStatus) {
        super(message);
        this.httpStatus = httpStatus;
    }
}
