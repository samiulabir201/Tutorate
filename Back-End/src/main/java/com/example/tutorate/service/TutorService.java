package com.example.tutorate.service;

import com.example.tutorate.model.Tutor;

import java.util.List;

public interface TutorService {
    Tutor saveTutor(Tutor tutor);
    List<Tutor> getTutors(String searchTerm);
    Tutor getTutorByName(String name);
}
