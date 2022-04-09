package com.example.tutorate.repository;

import com.example.tutorate.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


    @Repository
    public interface StudentRepository extends JpaRepository<Student, Integer> {
        public Student findById(int id);
    }

