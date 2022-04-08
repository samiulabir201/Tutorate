package com.example.tutorate.model;

import javax.persistence.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Tutor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private float rating;
    private String location;
    private String phone;
    @ElementCollection
    private List<String> grades = new ArrayList<>();
    @ElementCollection
    private List<String> subjects = new ArrayList<>();
    private int min_wage;
    private String password;
    private int role;
  
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

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }
}
