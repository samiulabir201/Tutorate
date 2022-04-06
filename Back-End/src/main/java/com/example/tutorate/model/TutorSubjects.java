package com.example.tutorate.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.io.Serializable;

class TutorSubjectKeys implements Serializable {
    private int tutorId;
    private int subjectId;
}

@Entity
@IdClass(TutorSubjectKeys.class)
public class TutorSubjects {
    @Id
    private int tutorId;
    @Id
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
