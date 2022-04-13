package com.example.tutorate.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String username;
    private String password;
    @Enumerated
    private Role role;

    public User() {
        role = Role.user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private Tutor tutor;

    public Tutor getTutor() {
        return tutor;
    }

    public void setTutor(Tutor tutor) {
        this.tutor = tutor;
    }

    @OneToMany(mappedBy = "user")
    Set<TutorRatingKey> tutorRatingKeySet;

    public Set<TutorRatingKey> getTutorRatingKeySet() {
        return tutorRatingKeySet;
    }

    public void setTutorRatingKeySet(Set<TutorRatingKey> tutorRatingKeySet) {
        this.tutorRatingKeySet = tutorRatingKeySet;
    }
}
