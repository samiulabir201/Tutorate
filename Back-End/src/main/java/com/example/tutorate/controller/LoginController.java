package com.example.tutorate.controller;

import com.example.tutorate.service.TutorService;
import com.example.tutorate.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.example.tutorate.model.User;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/user")
public class LoginController {
    @Autowired
    private TutorService tutorService;

    @Autowired
            private UserService userService;
    BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();


    @PostMapping("/checkUser")
    public boolean checkUser (@RequestBody User user, HttpServletRequest request) {
        return userService.userExists(user.getUsername());
    }

    @PostMapping("/login")
    public User login (@RequestBody User user, HttpServletRequest request) {
        HttpSession session = request.getSession();
        if(userService.authenticate(user.getUsername(), user.getPassword()) == true) {
            session.setAttribute("User", user.getUsername());
            return user;
        }
         else
             return null;
    }

    @PostMapping("/register")
    public User register (@RequestBody User user, HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.setAttribute("User", user.getUsername());
        return userService.addNewUser(user);
    }

//         if(tutorService.getTutorByName(tutor.getName())!=null){
//             Tutor matchedTutor=tutorService.getTutorByName(tutor.getName());
//             if(encoder.matches(tutor.getPassword(),matchedTutor.getPassword()))
//             {
//                 HttpSession session=request.getSession();
//                 //What session information we are going to add
//                 session.setAttribute("Session id",matchedTutor.getId());
//                 session.setAttribute("Session token",request.getSession());
//                 session.setAttribute("Session name",matchedTutor.getName());
//                 session.setAttribute("Session role",matchedTutor.getRole());
//                 System.out.println("Authenticated");
//                 return "Authenticated";
//             }
//             else{
//                 System.out.println("Password dont match");
//                 return null;
//             }

//         }
//         else{
//             System.out.println("Problem");
//         }
//         System.out.println("Username don't match");
//         return null;
//     }

}
