package com.example.tutorate.service;

import com.example.tutorate.model.User;
import com.example.tutorate.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
@Autowired
    UserRepository userRepository;

@Override
    public User getUserByName(String username){
    User searched_user=new User();
//    searched_user.setName("never");
    for(User user:userRepository.findAll()){
        String tutorName=user.getUsername();
        if(tutorName.equals(username)){
            searched_user=user;
            return searched_user;
        }
    }
    return searched_user;
}
}
