package com.example.tutorate.controller;

import com.example.tutorate.model.*;
import com.example.tutorate.repository.RatingRepository;
import com.example.tutorate.repository.TutorRepository;
import com.example.tutorate.repository.UserRepository;
import com.example.tutorate.service.RatingService;
import com.example.tutorate.service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/tutor")
public class TutorController {
    @Autowired
    private TutorService tutorService;
    @Autowired
    private RatingService ratingService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TutorRepository tutorRepository;
    @Autowired
    private RatingRepository ratingRepository;

    @PostMapping("/add")
    public User add(@RequestBody Tutor tutor, HttpServletRequest request) {
        String username = (String) request.getSession().getAttribute("User");
        User user = userRepository.findByUsername(username);
        user.setRole(Role.tutor);
        tutorService.saveTutor(tutor);
        return user;
    }
  
    @PostMapping("/getTutors")
    public List<Tutor> getTutors(@RequestParam("searchTerm") String searchTerm, @RequestBody SearchParams searchParams, HttpServletRequest request) {
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
//            int role= (int) session.getAttribute("Session role");
//            if(role==Role.tutor.ordinal())
//            {
//                Tutor user=tutorRepository.findById(userId);
//                return user;
//            }
            return null;
    }

    @GetMapping("/{id}")
        public Tutor getTutorDetail(@PathVariable int id){
        return tutorRepository.findById(id);
    }

    @GetMapping("/getAllSubjects")
    public List<String> getAllSubjects() {
        return tutorRepository.getAllSubjects().stream().distinct().collect(Collectors.toList());
    }

    @GetMapping("/getAllLocations")
    public List<String> getAllLocation() {
        return tutorRepository.getAllLocations().stream().distinct().collect(Collectors.toList());
    }

    @GetMapping("/getAllGrades")
    public List<String> getAllGrades() {
        return tutorRepository.getAllGrades().stream().distinct().collect(Collectors.toList());
    }

    @GetMapping("/rate")
    public int rate(@RequestParam int student_id, @RequestParam int tutor_id,@RequestParam int rating) {
        if (!ratingService.findRated(student_id, tutor_id)) {
            Tutor selected_tutor = tutorRepository.findById(tutor_id);
            User selected_user = userRepository.findById(student_id);
            TutorRatingKey tutorRatingKey = new TutorRatingKey(selected_user, selected_tutor, rating);

            selected_user = ratingService.addRatingRecordStudent(selected_user, tutorRatingKey);
            selected_tutor = ratingService.addRatingRecordTutor(selected_tutor, tutorRatingKey);

            selected_tutor.calculateAverageRating();
            ratingRepository.save(tutorRatingKey);
            tutorRepository.save(selected_tutor);
            userRepository.save(selected_user);

            return rating;
        }
        return 0;
    }
}
