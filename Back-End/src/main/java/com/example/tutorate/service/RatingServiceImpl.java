package com.example.tutorate.service;

import com.example.tutorate.model.Student;
import com.example.tutorate.model.Tutor;
import com.example.tutorate.model.TutorRatingKey;
import com.example.tutorate.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class RatingServiceImpl implements RatingService{

@Autowired
    RatingRepository ratingRepository;
    @Override
    public boolean findRated(int studentId, int TutorId) {

        for(TutorRatingKey ratingKey:ratingRepository.findAll()){
            Student student=ratingKey.getStudent();
            Tutor tutor=ratingKey.getTutor();
            if(student.getId()==studentId && tutor.getId()==TutorId){
                return true;

            }

        }

        return false;
    }

    @Override
    public Student addRatingRecordStudent(Student student,TutorRatingKey tutorRatingKey) {
        Set<TutorRatingKey> tutorRatingKeySetStudent=student.getTutorRatingKeySet();
        tutorRatingKeySetStudent.add(tutorRatingKey);
        student.setTutorRatingKeySet(tutorRatingKeySetStudent);



        return student;
    }

    @Override
    public Tutor addRatingRecordTutor(Tutor tutor, TutorRatingKey tutorRatingKey) {
        Set<TutorRatingKey> tutorRatingKeySetTutor=tutor.getTutorRatingKeys();
        tutorRatingKeySetTutor.add(tutorRatingKey);
        tutor.setTutorRatingKeys(tutorRatingKeySetTutor);

        return tutor;
    }

}
