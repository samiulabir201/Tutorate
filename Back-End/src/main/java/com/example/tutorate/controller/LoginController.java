package com.example.tutorate.controller;

import com.example.tutorate.model.Tutor;
import com.example.tutorate.repository.TutorRepository;
import com.example.tutorate.service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/tutor")
public class LoginController {
    @Autowired
    private TutorService tutorService;
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
    public String login(@RequestBody Tutor tutor, HttpServletRequest request)
    {


        if(tutorService.getTutorByName(tutor.getName())!=null){
            Tutor matchedTutor=tutorService.getTutorByName(tutor.getName());
            if(encoder.matches(tutor.getPassword(),matchedTutor.getPassword()))
            {
                HttpSession session=request.getSession();
                session.setAttribute("Session id",matchedTutor.getId());
                session.setAttribute("Session token",request.getSession());
                session.setAttribute("Session name",matchedTutor.getName());
                System.out.println("Authenticated");
                return "Authenticated";
            }
            else{
                System.out.println("Password dont match");
                return null;
            }

        }
        else{
            System.out.println("Problem");
        }
        System.out.println("Username don't match");
        return null;
    }

}
