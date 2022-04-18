package com.example.tutorate.repository;

import com.example.tutorate.model.TutorRating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

    @Repository
    public interface RatingRepository extends JpaRepository<TutorRating, Integer> {
        public TutorRating findById(int id);

        @Query(value = "SELECT AVG (rate) from tutor_rating where fk_tutor= :id", nativeQuery = true)
        float  getAverageRating(int id);

    }

