package com.example.tutorate.service;


import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

public interface RatingService {

     boolean findRated(int studentId,int TutorId);
     void storeRating(int tutorId, ArrayList<Integer> ratingList, HttpServletRequest request);
     float calculateAverageRating(int id);
}
