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
    private String password;
    private int min_wage;
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
}
