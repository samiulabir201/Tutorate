package com.example.tutorate.controller;

import com.example.tutorate.model.Tutor;
import com.example.tutorate.service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/tutor")
public class TutorController {
    @Autowired
    private TutorService tutorService;

    @PostMapping("/add")
    public String add(@RequestBody Tutor tutor) {
        tutorService.saveTutor(tutor);

        return "New tutor added";
    }
    /*
    * Checks if session token matches with request.getsession()
    * */
    @GetMapping("/getTutors")
    public List<Tutor> getTutors(@RequestParam("searchTerm") String searchTerm, HttpServletRequest request) {
         System.out.println(request.getSession());

        HttpSession session=request.getSession();
        if(session.getAttribute("Session token").equals(request.getSession()))
        return tutorService.getTutors(searchTerm);
        else
            return null;
    }

    @GetMapping("/getElse")
    public List<Tutor> getElse(@RequestParam("searchTerm") String searchTerm, HttpServletRequest request) {
        System.out.println(request.getSession());
        HttpSession session=request.getSession();
        System.out.println(session.getAttribute("Session id"));

        return tutorService.getTutors(searchTerm);
    }





}
