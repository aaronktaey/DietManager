package project.dietmanager.controller;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import project.dietmanager.dto.LoginDto;
import project.dietmanager.entity.User;
import project.dietmanager.exception.NoSuchUserException;
import project.dietmanager.jwt.JwtTokenProvider;
import project.dietmanager.repository.UserRepository;
import project.dietmanager.service.LoginService;

import javax.naming.AuthenticationException;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;
    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @ResponseBody
    @PostMapping("/api/login")
    private String login(@RequestBody LoginDto dto, HttpServletResponse response) {
        boolean loginYn = loginService.login(dto);
        User user = userRepository.findByLoginId(dto.getLoginId()).orElseThrow(() -> new NoSuchUserException("등록된 회원이 아닙니다."));

        if (loginYn) {
            List<String> roles = new ArrayList<>();

            Cookie cookie = new Cookie("jwtToken", jwtTokenProvider.createToken(dto.getLoginId(), user.getRoles()));
            cookie.setMaxAge(30 * 60 * 1000);
            cookie.setPath("/");

            response.addCookie(cookie);
        }

        return "로그인에 성공하였습니다";
    }

}
