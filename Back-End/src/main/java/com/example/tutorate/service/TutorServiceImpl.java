package com.example.tutorate.service;

import com.example.tutorate.model.SearchParams;
import com.example.tutorate.model.Tutor;
import com.example.tutorate.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Service
public class TutorServiceImpl implements TutorService{
    @Autowired
    private TutorRepository tutorRepository;

    public TutorServiceImpl() {}

    @Override
    public Tutor saveTutor(Tutor tutor) {
        return tutorRepository.save(tutor);
    }

    @Override
    public List<Tutor> getTutors(String searchTerm, SearchParams searchParams) {
        searchTerm = searchTerm.toLowerCase();
        List<Tutor> tutors = new ArrayList<>();
        for (Tutor tutor: tutorRepository.findAll()) {
            if (!searchParams.filter(tutor))    continue;

            // search by name
            if (tutor.getName().toLowerCase().startsWith(searchTerm))
                tutors.add(tutor);

            // search by location
            else if (tutor.getLocation().toLowerCase().startsWith(searchTerm))
                tutors.add(tutor);
        }
        return tutors;
    }
    /*
    * Checks if any entry in database has name equal to name entered
    * */
    @Override
    public  Tutor getTutorByName(String username){
        Tutor searched_tutor=new Tutor();
        searched_tutor.setName("never");
        for(Tutor tutor:tutorRepository.findAll()){
            String tutorName=tutor.getName();
            if(tutorName.equals(username)){
                searched_tutor=tutor;
                return searched_tutor;
            }
        }
        return searched_tutor;
    }

    /*
    * Check if user is authenticated
    * */

    @Override
    public boolean sessionCheck(HttpServletRequest request){
        HttpSession session =request.getSession();
        if(session.getAttribute("Session token")==null)
            return false;
        if(session.getAttribute("Session token").equals(request.getSession()))
            return true;
        else    return false;
    }

    @Override
    public float calculateAverageRating(int id) {
      return   tutorRepository.getAverageRating(id);
    }
}
