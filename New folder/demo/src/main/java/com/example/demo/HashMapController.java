package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/hashmap")
public class HashMapController {
    @PostMapping
    public Map<Integer, String> getSortedMap(@RequestBody List<Student> students) {

        return students.stream()
                .sorted(Comparator.comparing(Student::getName))
                .collect(Collectors.toMap(
                        Student::getId,
                        Student::getName,
                        (oldVal, newVal) -> newVal,
                        LinkedHashMap::new     // 🔥 sorted by key
                ));
    }
}
