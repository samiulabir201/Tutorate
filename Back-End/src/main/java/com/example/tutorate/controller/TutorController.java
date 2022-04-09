package com.example.tutorate.controller;

import com.example.tutorate.model.SearchParams;
import com.example.tutorate.model.Tutor;
import com.example.tutorate.repository.TutorRepository;
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
    @Autowired
    private TutorRepository tutorRepository;
    enum Role{
        tutor,
        student
    }
    @PostMapping("/add")
    public String add(@RequestBody Tutor tutor) {
        tutorService.saveTutor(tutor);
        return "New tutor added";
    }
  
    @PostMapping("/getTutors")
    public List<Tutor> getTutors(@RequestParam("searchTerm") String searchTerm, @RequestBody SearchParams searchParams, HttpServletRequest request) {
        // if(tutorService.sessionCheck(request))
        return tutorService.getTutors(searchTerm, searchParams);
    }

    /*Get homepage showing all the tutors available, from this information we choose which
    info to show in front end(clickable links)
    * */
    @GetMapping("/home")
    public List<Tutor>HomePage(HttpServletRequest request){

        return tutorRepository.findAll();

    }
    /*
    * Provides detail of user logged in
    * user type can be distinguished according to role of logged user
    * user can be student type or tutor type
    * I've used enum to identify role
    * */
    @GetMapping("/profile")
    public Tutor getProfileOfUser(HttpServletRequest request){
        if(tutorService.sessionCheck(request)==false)
            return null;
            HttpSession session=request.getSession();
            int userId= (int) session.getAttribute("Session id");
            int role= (int) session.getAttribute("Session role");
            if(role==Role.tutor.ordinal())
            {
                Tutor user=tutorRepository.findById(userId);
                return user;
            }
            return null;
    }
    /*
    * details of tutor selected requested parameter is Tutor object to make it easy to
    * remember what we are passing for each get
    * */
    @GetMapping("/tutordetail")
        public Tutor getTutorDetail(@RequestBody Tutor tutor,HttpServletRequest request){

        Tutor selectedTutor=tutorRepository.findById(tutor.getId());
            return selectedTutor;
    }


}
