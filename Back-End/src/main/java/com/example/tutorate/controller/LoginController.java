package com.example.tutorate.controller;

import com.example.tutorate.model.Student;
import com.example.tutorate.model.Tutor;
import com.example.tutorate.model.User;
import com.example.tutorate.repository.StudentRepository;
import com.example.tutorate.repository.TutorRepository;
import com.example.tutorate.repository.UserRepository;
import com.example.tutorate.service.TutorService;
import com.example.tutorate.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/user")
public class LoginController {
    @Autowired
    private TutorService tutorService;

    @Autowired
            private UserService userService;
    @Autowired
            private UserRepository userRepository;
    @Autowired
            private TutorRepository tutorRepository;
    @Autowired
            private StudentRepository studentRepository;
    BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
    @PostMapping("/login")

    /*
    * Password is Bcrypted
    * We have to make a page which would accept these information
    * Inside if condition it checks with a tutorService function if the username exists in database
    * Then it checks if the password which is encoded as Bcrypt in database matches with entered password
    * If all checks out it saves the request session as Session Token
    * Also session id and session name is saved for later use
    * return string either null or Authenticated
    * null return can be replaced with whatever string frontend desires to let the user know its not authenticated
    *
    * Username has to be unique
    *
    * */
    public int login(@RequestBody User user, HttpServletRequest request) {
//        System.out.println(json);
//        return 0;
//    }

        if (userService.getUserByName(user.getUsername()) != null) {
            User matchedUser = userService.getUserByName(user.getUsername());
            if (encoder.matches(user.getPassword(), matchedUser.getPassword())) {
                HttpSession session = request.getSession();
                //What session information we are going to add
                session.setAttribute("Session id", matchedUser.getId());
                session.setAttribute("Session token", request.getSession());
                session.setAttribute("Session User", matchedUser);

                System.out.println("Authenticated");
                return 0;
            } else {
                System.out.println("Password dont match");
                return -1;
            }

        } else {
            System.out.println("Problem");
        }
        System.out.println("Username don't match");
        return -1;
    }

    @PostMapping("/register")
        public int register(@RequestBody User user,HttpServletRequest request){
        Tutor tutor=new Tutor();
        tutor.setName(user.getUsername());

        tutor.setPassword(user.getPassword());
        tutor.setRole(user.getRole());
        User newUser=user;

        if(user.getRole()==0) {
            newUser.setTutor(tutor);
            tutor.setUser(user);
            tutorRepository.save(tutor);
        }
        else {
            Student student=new Student();
            newUser.setStudent(student);
            student.setUser(newUser);
            studentRepository.save(student);

        }
            userRepository.save(newUser);

        return 0;
    }



}
