package project.dietmanager.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import project.dietmanager.dto.LoginDto;
import project.dietmanager.dto.UserDto;
import project.dietmanager.entity.User;
import project.dietmanager.repository.UserRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public boolean login(LoginDto dto) {
        Optional<User> findUser = userRepository.findByLoginId(dto.getLoginId());

        if (findUser.isEmpty()) {
            throw new IllegalStateException("등록된 회원이 아닙니다. 회원가입을 진행하세요.");
        }

        if (!passwordEncoder.matches(dto.getPassword(), findUser.get().getPassword())) {
            throw new IllegalStateException("로그인에 실패하였습니다.");
        }

        return true;
    }
}
