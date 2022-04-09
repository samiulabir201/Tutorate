package com.example.tutorate.controller;

import com.example.tutorate.model.Tutor;
import com.example.tutorate.model.TutorRatingKey;
import com.example.tutorate.model.User;
import com.example.tutorate.repository.RatingRepository;

import com.example.tutorate.repository.TutorRepository;
import com.example.tutorate.repository.UserRepository;
import com.example.tutorate.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/student")
public class StudentController {
@Autowired
private RatingService ratingService;
@Autowired
private RatingRepository ratingRepository;
@Autowired
private TutorRepository tutorRepository;
@Autowired
private UserRepository userRepository;


/*
* Rates keeps individual rating records of students rating tutors along with calculating averages
* */
@GetMapping("/rate")
    public int rate(@RequestParam int student_id, @RequestParam int tutor_id,@RequestParam int rating){


    if(!ratingService.findRated(student_id,tutor_id)){
        Tutor selected_tutor= tutorRepository.findById(tutor_id);
        User selected_user=userRepository.findById(student_id);
        TutorRatingKey tutorRatingKey=new TutorRatingKey(selected_user,selected_tutor,rating);

        selected_user=ratingService.addRatingRecordStudent(selected_user,tutorRatingKey);
        selected_tutor=ratingService.addRatingRecordTutor(selected_tutor,tutorRatingKey);

        selected_tutor.calculateAverageRating();
        ratingRepository.save(tutorRatingKey);
        tutorRepository.save(selected_tutor);
        userRepository.save(selected_user);

        return rating;
    }
    return 0;



}

}
