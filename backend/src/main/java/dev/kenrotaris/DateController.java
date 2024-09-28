package dev.kenrotaris;

import java.time.OffsetDateTime;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(ApiPaths.DATE_ENDPOINT)
public class DateController {

    @GetMapping
    public OffsetDateTime getCurrentDate() {
        return OffsetDateTime.now();
    }
}
