package project.dietmanager.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import project.dietmanager.dto.UserDto;
import project.dietmanager.entity.User;
import project.dietmanager.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public String signUp(UserDto userDto) {
        userRepository.save(User.builder()
                .loginId(userDto.getLoginId())
                .password(passwordEncoder.encode(userDto.getPassword())) // 패스워드 암호화 적용
                .build());

        return "home";
    }
}
