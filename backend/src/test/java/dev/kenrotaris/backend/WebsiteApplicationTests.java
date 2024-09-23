package dev.kenrotaris.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import dev.kenrotaris.TestApplication;

@ActiveProfiles("test")
@SpringBootTest(classes = TestApplication.class)
class WebsiteApplicationTests {
    @Test
    void contextLoads() {
    }
}
