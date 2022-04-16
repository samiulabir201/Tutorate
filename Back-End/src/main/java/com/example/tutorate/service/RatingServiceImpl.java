package com.example.tutorate.service;


import com.example.tutorate.model.Tutor;
import com.example.tutorate.model.TutorRatingKey;
import com.example.tutorate.model.User;
import com.example.tutorate.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class RatingServiceImpl implements RatingService{

@Autowired
    RatingRepository ratingRepository;
    @Override
    public boolean findRated(int userId, int TutorId) {

        for(TutorRatingKey ratingKey:ratingRepository.findAll()){
            User user=ratingKey.getUser();
            Tutor tutor=ratingKey.getTutor();
            if(user.getId()==userId && tutor.getId()==TutorId){
                return true;

            }

        }

        return false;
    }

    @Override
    public User addRatingRecordStudent(User user, TutorRatingKey tutorRatingKey) {
        Set<TutorRatingKey> tutorRatingKeySetStudent=user.getTutorRatingKeySet();
        tutorRatingKeySetStudent.add(tutorRatingKey);
        user.setTutorRatingKeySet(tutorRatingKeySetStudent);



        return user;
    }

    @Override
    public Tutor addRatingRecordTutor(Tutor tutor, TutorRatingKey tutorRatingKey) {
        Set<TutorRatingKey> tutorRatingKeySetTutor=tutor.getTutorRatingKeys();
        tutorRatingKeySetTutor.add(tutorRatingKey);
        tutor.setTutorRatingKeys(tutorRatingKeySetTutor);

        return tutor;
    }



}
