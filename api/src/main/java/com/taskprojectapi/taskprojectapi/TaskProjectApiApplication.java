package com.taskprojectapi.taskprojectapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:3000")

public class TaskProjectApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskProjectApiApplication.class, args);
	}

}
