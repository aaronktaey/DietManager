package project.dietmanager.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import project.dietmanager.dto.LoginDto;
import project.dietmanager.entity.Users;
import project.dietmanager.exception.PasswordMismatchException;
import project.dietmanager.repository.UserRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public boolean login(LoginDto dto) {
        Optional<Users> findUser = userRepository.findByLoginId(dto.getLoginId());

        if (findUser.isEmpty()) {
            throw new IllegalStateException("등록된 회원이 아닙니다. 회원가입을 진행하세요.");
        }

        if (!passwordEncoder.matches(dto.getPassword(), findUser.get().getPassword())) {
            throw new PasswordMismatchException("비밀번호가 일치하지 않습니다.");
        }

        return true;
    }
}
