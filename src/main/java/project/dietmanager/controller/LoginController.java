package project.dietmanager.controller;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import project.dietmanager.dto.LoginDto;
import project.dietmanager.dto.UserDto;
import project.dietmanager.entity.Users;
import project.dietmanager.exception.NoSuchUserException;
import project.dietmanager.exception.PasswordMismatchException;
import project.dietmanager.jwt.JwtTokenProvider;
import project.dietmanager.repository.UserRepository;
import project.dietmanager.service.LoginService;

import javax.naming.AuthenticationException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;
    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/api/login")
    public ResponseEntity<UserDto> login(@RequestBody LoginDto dto, HttpServletResponse response) {
        boolean loginYn = loginService.login(dto);
        Users users = userRepository.findByLoginId(dto.getLoginId()).orElseThrow(() -> new NoSuchUserException("등록된 회원이 아닙니다."));

        if (loginYn) {
            List<String> roles = new ArrayList<>();

            Cookie cookie = new Cookie("jwtToken", jwtTokenProvider.createToken(dto.getLoginId(), users.getRoles()));
            cookie.setMaxAge(30 * 60 * 1000);
            cookie.setPath("/");

            response.addCookie(cookie);

            return new ResponseEntity<>(UserDto.builder().loginId(users.getLoginId()).build(), HttpStatus.OK);
        } else {
            throw new PasswordMismatchException("로그인 실패");
        }
    }

}
