package project.dietmanager.controller;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import project.dietmanager.dto.LoginDto;
import project.dietmanager.service.LoginService;

import javax.naming.AuthenticationException;

@Controller
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;

    @ResponseBody
    @PostMapping("/api/login")
    private String login(@RequestBody LoginDto dto) {
        boolean loginYn = loginService.login(dto);

        return "로그인에 성공하였습니다";
    }
}
