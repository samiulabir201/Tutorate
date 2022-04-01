package com.example.tutorate.model;

public class SearchParams {
    private String[] subjects;
    private int[] wages;

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
}
