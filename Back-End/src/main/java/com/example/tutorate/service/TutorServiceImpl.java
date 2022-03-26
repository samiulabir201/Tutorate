package com.example.tutorate.service;

import com.example.tutorate.model.Tutor;
import com.example.tutorate.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TutorServiceImpl implements TutorService{

    @Autowired
    private TutorRepository tutorRepository;

    @Override
    public Tutor saveTutor(Tutor tutor) {
        return tutorRepository.save(tutor);
    }

    @Override
    public List<Tutor> getTutors(String searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        List<Tutor> tutors = new ArrayList<>();
        for (Tutor tutor: tutorRepository.findAll()) {
            String tutorName = tutor.getName().toLowerCase();
            if (tutorName.startsWith(searchTerm))   tutors.add(tutor);
        }
        return tutors;
    }
}
