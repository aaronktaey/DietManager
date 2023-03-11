package project.dietmanager.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String loginId;

    private String password;

    @Builder
    public User(String loginId, String password) {
        this.loginId = loginId;
        this.password = password;
    }
}
