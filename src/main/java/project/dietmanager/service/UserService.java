package project.dietmanager.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import project.dietmanager.dto.UserDto;
import project.dietmanager.entity.Users;
import project.dietmanager.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public String signUp(UserDto userDto) {
        userRepository.save(Users.builder()
                .loginId(userDto.getLoginId())
                .password(passwordEncoder.encode(userDto.getPassword())) // 패스워드 암호화 적용
                .role(new String[]{"ROLE_USER"})
                .build());

        return "home";
    }
}
