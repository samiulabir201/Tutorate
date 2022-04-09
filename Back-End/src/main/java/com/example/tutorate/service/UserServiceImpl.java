package com.example.tutorate.service;

import com.example.tutorate.model.User;
import com.example.tutorate.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    public boolean userExists(String username) {
        User user = userRepository.findByUsername(username);
        if(user != null)
            return true;
        else
            return false;
    }

    public boolean authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);

        if(Objects.equals(user.getPassword(), password))
            return true;
        else
            return false;
    }

    public User addNewUser(User user) {
        userRepository.save(user);
        return user;
    }
}
