package com.Spring_Projects.SpringBoot_Beginner.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.Spring_Projects.SpringBoot_Beginner.models.User;

@Service
public class UserService {
    private List<User> allUsers;
    int nextId = 3;

    UserService() {
        allUsers = new ArrayList<>();
        allUsers.add(new User(1, "John", "Male", "/images/john.png"));
        allUsers.add(new User(2, "Jane", "Female", "/images/jane.png"));
    }

    public List<User> getAllUsers() {
        return allUsers;
    }

    public User getUserById(int id) {
        for (int i = 0; i < allUsers.size(); i++) {
            if (allUsers.get(i).getId() == id)
                return allUsers.get(i);
        }
        return null;
    }

    public User addUser(User user) {
        user.setId(nextId);
        allUsers.add(user);
        nextId++;

        return user;
    }

    public User updateUser(int id, User user) {
        for (int i = 0; i < allUsers.size(); i++) {
            User temp = allUsers.get(i);
            if (temp.getId() == id) {
                temp.setName(user.getName());
                temp.setGender(user.getGender());
                temp.setImage(user.getImage());
                return temp;

            }
        }
        return null;
    }

    public boolean deleteUser(int id) {
        for (int i = 0; i < allUsers.size(); i++) {
            if (allUsers.get(i).getId() == id) {
                allUsers.remove(i);
                return true;
            }
        }
        return false;

    }
}
