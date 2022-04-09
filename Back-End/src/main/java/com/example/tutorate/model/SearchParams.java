package com.example.tutorate.model;

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
}
