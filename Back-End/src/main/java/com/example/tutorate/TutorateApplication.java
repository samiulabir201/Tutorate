package com.example.tutorate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
public class TutorateApplication {

    public static void main(String[] args) {
        SpringApplication.run(TutorateApplication.class, args);
    }

}
