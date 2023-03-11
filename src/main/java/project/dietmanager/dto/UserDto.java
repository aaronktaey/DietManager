package project.dietmanager.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@ToString
@Setter
public class UserDto {
    @NotEmpty
    @Size(min = 3, max = 15)
    private String loginId;

    @NotEmpty
    @Size(min = 8, max = 20)
    private String password;

    @Builder
    public UserDto(String loginId, String password) {
        this.loginId = loginId;
        this.password = password;
    }
}
