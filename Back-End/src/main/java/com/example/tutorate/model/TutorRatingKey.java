package com.example.tutorate.model;



import javax.persistence.*;
import java.io.Serializable;

@Entity
public class TutorRatingKey  {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "rating_id")
    int id;
    @ManyToOne
    @JoinColumn(name = "id")
    User user;
    @ManyToOne
    @JoinColumn(name = "tutor_id")
    Tutor tutor;
    public TutorRatingKey(){

    }

    public TutorRatingKey(User user,Tutor tutor,int rate){
        this.user=user;
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

    public void setUser(User user) {
        this.user = user;
    }

    public void setTutor(Tutor tutor) {
        this.tutor = tutor;
    }

    public User getUser() {
        return user;
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
