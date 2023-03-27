package project.dietmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.dietmanager.entity.Users;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users, Long> {
    public Optional<Users> findByLoginId(String loginId);
}
