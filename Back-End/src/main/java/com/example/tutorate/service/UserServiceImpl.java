package com.example.tutorate.service;

import com.example.tutorate.model.User;
import com.example.tutorate.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;

    @Override
    public User getUserByName(String username){
    User searched_user=new User();
        for(User user:userRepository.findAll()){
            String tutorName=user.getUsername();
            if(tutorName.equals(username)){
                searched_user=user;
                return searched_user;
            }
        }
        return searched_user;
    }

    public boolean userExists(String username) {
        User user = userRepository.findByUsername(username);
        return user != null;
    }

    public boolean authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);
        return password.equals(user.getPassword());
    }

    public User addNewUser(User user) {
        userRepository.save(user);
        return userRepository.findByUsername(user.getUsername());
    }
    
    /*public void deleteByName(String name){
        User getUserByName;
        name = getUserByName.getUsername();
        userRepository.deleteByName(name);
    }*/

    /*public User deleteUser(User user){
        Iterator<User> iterator = user.iterator();
        iterator.remove();

    }*/
}
