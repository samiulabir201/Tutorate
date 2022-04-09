package com.example.tutorate.model;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Tutor {
    @Id
    @Column(name = "user_id")
    private int id;
    private String name;
    private String password;
    private int min_wage;
    private int role;
    private int averageRating;
    /*
    * Element collection enables subjects to be stored in another table according to id but can be
    * called with Tutor itself*/
    @ElementCollection
    private List<String> subjects;
  
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
  
    public int getMin_wage() {
        return min_wage;
    }

    public void setMin_wage(int min_wage) {
        this.min_wage = min_wage;
    }

    public List<String> getSubjects() {
        return subjects;
    }

    public void setSubjects(List<String> subjects) {
        this.subjects = subjects;
    }


    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

@OneToMany(mappedBy = "tutor")
    Set<TutorRatingKey> tutorRatingKeys;

    public Set<TutorRatingKey> getTutorRatingKeys() {
        return tutorRatingKeys;
    }

    public void setTutorRatingKeys(Set<TutorRatingKey> ratingKeys) {
        this.tutorRatingKeys = ratingKeys;
    }

    public int getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(int averageRating) {
        this.averageRating = averageRating;
    }

    public void calculateAverageRating(){
        int average_rate=0;

        for(TutorRatingKey keys:tutorRatingKeys){
           average_rate+= keys.getRate();

        }
        average_rate/=tutorRatingKeys.size();
        setAverageRating(average_rate);
    }
}
