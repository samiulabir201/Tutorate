package com.example.tutorate.model;



import javax.persistence.*;
import java.io.Serializable;

@Entity
public class TutorRatingKey  {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    @ManyToOne
    @JoinColumn(name = "student_id")
    Student student;
    @ManyToOne
    @JoinColumn(name = "tutor_id")
    Tutor tutor;
    public TutorRatingKey(){

    }

    public TutorRatingKey(Student student,Tutor tutor,int rate){
        this.student=student;
        this.tutor=tutor;
        this.rate=rate;
    }

    int rate;

    public void setId(int id) {
        this.id = id;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public void setTutor(Tutor tutor) {
        this.tutor = tutor;
    }

    public Student getStudent() {
        return student;
    }

    public Tutor getTutor() {
        return tutor;
    }

    public int getRate() {
        return rate;
    }

    public int getId() {
        return id;
    }
}
