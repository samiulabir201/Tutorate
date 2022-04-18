package com.example.tutorate.controller;

import com.example.tutorate.model.Role;
import com.example.tutorate.model.Tutor;
import com.example.tutorate.repository.UserRepository;
import com.example.tutorate.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import com.example.tutorate.model.User;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/user")
public class LoginController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/checkUser")
    public boolean checkUser(@RequestBody User user) {
        return userService.userExists(user.getUsername());
    }

    @PostMapping("/login")
    public User login (@RequestBody User user, HttpServletRequest request) {
        HttpSession session = request.getSession();
        if(userService.authenticate(user.getUsername(), user.getPassword())) {
            session.setAttribute("User", user.getUsername());
            return userRepository.findByUsername(user.getUsername());
        }
        else   return null;
    }

    @PostMapping("/register")
    public User register (@RequestBody User user, HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.setAttribute("User", user.getUsername());
        return userService.addNewUser(user);
    }

    @GetMapping("/logout")
    public void logout (HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
    }

    /*@GetMapping("/all")
    public List<User> getAllUser(){
        return userRepository.findAll();
    }*/

    // build update user REST API
    /*@PutMapping("{id}")
    public ResponseEntity<User> update(@PathVariable int id,@RequestBody User updateDetails) {
        System.out.println("hi");

            User update = userRepository.findById(id);
            System.out.println(id);

            update.setUsername(updateDetails.getUsername());
            update.setPassword(updateDetails.getPassword());
            update.setRole(updateDetails.getRole());



            userRepository.save(update);
            return ResponseEntity.ok(update);
    }*/
    @PostMapping("/update")
    public User update(@RequestBody User user, HttpServletRequest request) {
        String username = (String) request.getSession().getAttribute("User");
        User update = userRepository.findByUsername(username);
        update.setUsername(user.getUsername());
        update.setPassword(user.getPassword());
        update.setRole(user.getRole());
        //tutorService.saveTutor(tutor);
        userRepository.save(update);
        return update;
    }

    /*@PostMapping("/delete")
    public User delete(@RequestBody User user, HttpServletRequest request) {
        String username = (String) request.getSession().getAttribute("User");
        User delete = userRepository.findByUsername(username);
        user.deleteUser(delete);
        return user;
    }*/

}
   /* @PutMapping("/update")
    public ResponseEntity<User> update(HttpServletRequest request ,@RequestBody User updateDetails) {
        System.out.println("hi");
        HttpSession session = request.getSession();
        if (userService.authenticate(updateDetails.getUsername(), updateDetails.getPassword())) {
            session.setAttribute("id", updateDetails.getId());
            int id = updateDetails.getId();

            User update = userRepository.findById(id);
            System.out.println(id);

            update.setUsername(updateDetails.getUsername());
            update.setPassword(updateDetails.getPassword());
            update.setRole(updateDetails.getRole());

            userRepository.save(updateDetails);
            return ResponseEntity.ok(updateDetails);
        } else {
            return null;
        }
    }
}*/