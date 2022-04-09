package com.example.tutorate.service;

import com.example.tutorate.model.Student;
import com.example.tutorate.model.Tutor;
import com.example.tutorate.model.TutorRatingKey;
import org.springframework.stereotype.Service;


public interface RatingService {

     boolean findRated(int studentId,int TutorId);
   Student addRatingRecordStudent(Student student, TutorRatingKey tutorRatingKey);
    Tutor addRatingRecordTutor(Tutor tutor,TutorRatingKey tutorRatingKey);
}
