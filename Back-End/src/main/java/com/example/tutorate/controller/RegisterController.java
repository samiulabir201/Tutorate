package com.example.tutorate.controller;

import com.example.tutorate.service.TutorService;
import com.example.tutorate.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;

import com.example.tutorate.model.User;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/user")
public class RegisterController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public void register (@RequestBody User user, HttpServletRequest request) {
        userService.addNewUser(user);
    }
}
