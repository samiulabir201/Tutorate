package com.example.tutorate.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Student {
@Id
@Column(name = "user_id")
private int id;

    private String description;


    public Student(){

    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    @OneToMany(mappedBy = "student")
    Set<TutorRatingKey> tutorRatingKeySet;

    public Set<TutorRatingKey> getTutorRatingKeySet() {
        return tutorRatingKeySet;
    }

    public void setTutorRatingKeySet(Set<TutorRatingKey> tutorRatingKeySet) {
        this.tutorRatingKeySet = tutorRatingKeySet;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
