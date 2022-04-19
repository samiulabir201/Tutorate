package com.example.tutorate.service;

import com.example.tutorate.model.SearchParams;
import com.example.tutorate.model.Tutor;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface TutorService {
    Tutor saveTutor(Tutor tutor);
    List<Tutor> getTutors(String searchTerm, SearchParams searchParams);
    Tutor getTutorByName(String name);

    boolean sessionCheck(HttpServletRequest request);
   float calculateAverageRating(Tutor id);


    public Integer deleteById(int id);
}
