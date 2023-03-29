package project.dietmanager.oauth2;

import project.dietmanager.entity.Users;

import java.io.Serializable;

public class SessionUser implements Serializable {
    private String loginId;
    private String email;

    public SessionUser(Users users) {
        this.loginId = users.getLoginId();
        this.email = users.getEmail();
    }
}
