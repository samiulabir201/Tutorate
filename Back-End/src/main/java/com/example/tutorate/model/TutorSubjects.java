package com.example.tutorate.model;

import javax.persistence.*;
import java.io.Serializable;

class TutorSubjectKeys implements Serializable {
    private int tutorId;
    private int subjectId;
}

@Entity
@Table(name="tutor_subjects")
@IdClass(TutorSubjectKeys.class)
public class TutorSubjects {
    @Id
    @Column(name="tutor_id")
    private int tutorId;
    @Id
    @Column(name="subject_id")
    private int subjectId;

    public int getTutorId() {
        return tutorId;
    }

    public void setTutorId(int tutorId) {
        this.tutorId = tutorId;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }
}
