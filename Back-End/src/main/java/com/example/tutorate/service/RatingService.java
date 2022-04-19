package com.example.tutorate.service;
import com.example.tutorate.model.Tutor;
import com.example.tutorate.model.TutorRatingKey;
import com.example.tutorate.model.User;
import org.springframework.stereotype.Service;


public interface RatingService {

    boolean findRated(int userId, int TutorId);

    boolean findRated(int studentId, Tutor TutorId);
//     User addRatingRecordStudent(User user, TutorRatingKey tutorRatingKey);
//    Tutor addRatingRecordTutor(Tutor tutor,TutorRatingKey tutorRatingKey);

}
