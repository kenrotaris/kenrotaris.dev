package dev.kenrotaris;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		System.out.println("Current working directory: " + System.getProperty("user.dir"));
		SpringApplication.run(Application.class, args);
	}

}
