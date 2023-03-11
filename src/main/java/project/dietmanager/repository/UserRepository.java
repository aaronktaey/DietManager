package project.dietmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.dietmanager.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
