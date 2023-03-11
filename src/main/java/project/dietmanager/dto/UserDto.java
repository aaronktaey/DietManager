package project.dietmanager.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.*;

@ToString
@Getter
public class UserDto {
    @NotEmpty
    @Size(min = 3, max = 15)
    private String loginId;

    @NotEmpty
    @Size(min = 8, max = 20)
    private String password;
}
