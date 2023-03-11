package project.dietmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.dietmanager.dto.LoginDto;
import project.dietmanager.dto.UserDto;
import project.dietmanager.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    public Optional<User> findByLoginId(String loginId);
}
