package project.dietmanager.service;

import org.springframework.stereotype.Service;
import project.dietmanager.dto.UserDto;

@Service
public class UserService {

    public String signUp(UserDto userDto) {
        System.out.println("UserService.signUp");
        System.out.println("userDto = " + userDto);

        return "sss";
    }
}
