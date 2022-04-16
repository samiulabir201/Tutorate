package com.example.tutorate.model;



import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
public class TutorRatingKey  {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;
    @ManyToOne
    @JoinColumn(name = "tutor_id")
    Tutor tutor;
    int rate;
    int punctuality;
    int effectiveness;
    int clear_understanding;
    int patience;

    public TutorRatingKey(){

    }

    public TutorRatingKey(User user, Tutor tutor, ArrayList<Integer> list){
        this.user=user;
        this.tutor=tutor;
        this.punctuality= list.get(0);
        this.effectiveness=list.get(1);
        this.clear_understanding=list.get(2);
        this.patience=list.get(3);
    }



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

    public int calculateRate(){
        rate=1*this.punctuality+2*this.patience+3*this.clear_understanding+4*this.effectiveness;
        return rate;
    }

}
