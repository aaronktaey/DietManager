package project.dietmanager.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//@Controller
@Slf4j
public class HomeController {

//    @GetMapping("/")
    public String home() {
        log.info("Controller.home!");
        return "";
    }
}
