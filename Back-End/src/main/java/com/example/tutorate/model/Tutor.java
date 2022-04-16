package com.example.tutorate.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Tutor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private float average_rating;
    private String location;
    private String phone;
    @ElementCollection
    private List<String> grades = new ArrayList<>();
    @ElementCollection
    private List<String> subjects = new ArrayList<>();
    private int min_wage;

    @OneToOne(mappedBy = "tutor")
    private User user;

//    @OneToMany(mappedBy = "tutor")
//    Set<TutorRatingKey> tutorRatingKeys;
  
    public Tutor() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getAverage_rating() {
        return average_rating;
    }

    public void setAverage_rating(float rating) {
        this.average_rating = rating;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<String> getGrades() {
        return grades;
    }

    public void setGrades(List<String> grades) {
        this.grades = grades;
    }

    public List<String> getSubjects() {
        return subjects;
    }

    public void setSubjects(List<String> subjects) {
        this.subjects = subjects;
    }

    public int getMin_wage() {
        return min_wage;
    }

    public void setMin_wage(int min_wage) {
        this.min_wage = min_wage;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

//        public Set<TutorRatingKey> getTutorRatingKeys() {
//        return tutorRatingKeys;
//    }
//
//    public void setTutorRatingKeys(Set<TutorRatingKey> ratingKeys) {
//        this.tutorRatingKeys = ratingKeys;
//    }

//    public void calculateAverageRating(){
//        int average_rate=0;
//
//        for(TutorRatingKey keys:tutorRatingKeys){
//           average_rate+= keys.getRate();
//        }
//        average_rate/=tutorRatingKeys.size();
//        setRating(average_rate);
//    }
}
