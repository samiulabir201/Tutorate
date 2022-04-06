package com.example.tutorate.repository;

import com.example.tutorate.model.TutorSubjects;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TutorSubjectsRepository extends JpaRepository<TutorSubjects, Integer> {
    List<TutorSubjects> findByTutorId(int tutorID);
}
