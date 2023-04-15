package project.dietmanager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import project.dietmanager.dto.UserDto;
import project.dietmanager.service.UserService;

@Controller
@RequestMapping("/api/signup")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping
    public String signUp(@Validated @RequestBody UserDto userDto) {
        return userService.signUp(userDto);
    }
}
