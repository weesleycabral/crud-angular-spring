package com.wesley.controller;

import org.springframework.web.bind.annotation.*;

import com.wesley.model.Course;
import com.wesley.repository.CourseRepository;

import java.util.List;


@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @GetMapping
    public List<Course> list() {
        return courseRepository.findAll();
    }

    @PostMapping
    public void create(@RequestBody String json) {
        System.out.println(json);
    }
}
