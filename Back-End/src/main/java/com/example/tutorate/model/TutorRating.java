package com.example.tutorate.model;



import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;

@Entity
@IdClass(TutorRatingPK.class)
public class TutorRating implements Serializable {
    @Id
    @ManyToOne
    @JoinColumn(name = "fk_user")
    User user;

    @Id
    @ManyToOne
    @JoinColumn(name = "fk_tutor")
    Tutor tutor;

    int rate;
    int punctuality;
    int effectiveness;
    int clarity;
    int patience;

    public TutorRating(){}

    public TutorRating(User user, Tutor tutor, ArrayList<Integer> ratingList){
        this.user = user;
        this.tutor = tutor;
        this.punctuality = ratingList.get(0);
        this.effectiveness = ratingList.get(1);
        this.clarity = ratingList.get(2);
        this.patience = ratingList.get(3);
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

    public void calculateRate(){
        this.rate = ((1 * this.punctuality) + (2 * this.patience) + (3 * this.clarity) + (4 * this.effectiveness)) / 10;
    }

}
