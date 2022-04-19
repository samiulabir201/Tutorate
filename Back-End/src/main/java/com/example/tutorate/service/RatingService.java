package com.example.tutorate.service;


import com.example.tutorate.model.TutorRating;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

public interface RatingService {

     boolean findRated(int studentId,int TutorId);
     void storeRating(int tutorId, TutorRating tutorRating, HttpServletRequest request);
     float calculateAverageRating(int id);
}
