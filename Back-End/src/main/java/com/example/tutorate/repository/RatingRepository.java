package com.example.tutorate.repository;

import com.example.tutorate.model.TutorRatingKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

    @Repository
    public interface RatingRepository extends JpaRepository<TutorRatingKey, Integer> {
        public TutorRatingKey findById(int id);

    }

