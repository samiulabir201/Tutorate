package com.example.tutorate.controller;

import com.example.tutorate.model.Tutor;
import com.example.tutorate.service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
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

    @GetMapping("/getTutors")
    public List<Tutor> getTutors(@RequestParam("searchTerm") String searchTerm, HttpServletRequest request) {
        return tutorService.getTutors(searchTerm);
    }
}
