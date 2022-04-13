package com.example.tutorate.model;

import org.springframework.data.domain.Range;

import java.util.Collections;
import java.util.List;

public class SearchParams {
    private String[] subjects;
    private int[] wages;
    private String[] grades;
    private float rank;

    public String[] getSubjects() {
        return subjects;
    }

    public void setSubjects(String[] subjects) {
        this.subjects = subjects;
    }

    public int[] getWages() {
        return wages;
    }

    public void setWages(int[] wages) {
        this.wages = wages;
    }

    public String[] getGrades() {
        return grades;
    }

    public void setGrades(String[] grades)
    {
        this.grades = grades;
    }

    public float getRank() {
        return rank;
    }

    public void setRank(float rank) {
        this.rank = rank;
    }

    public boolean filter(Tutor tutor) {
        if (wages != null && !Range.closed(wages[0], wages[1]).contains(tutor.getMin_wage()))
            return false;
        if (subjects != null && subjects.length > 0 && Collections.disjoint(List.of(subjects), tutor.getSubjects()))
            return false;
        if (grades != null && grades.length > 0 && Collections.disjoint(List.of(grades), tutor.getGrades()))
            return false;
        if (rank > tutor.getRating())   return false;
        return true;
    }
}
