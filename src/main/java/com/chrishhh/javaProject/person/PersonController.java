package com.chrishhh.javaProject.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/students")  //routing
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping //GET request
    public List<Person> getAllPerson(@RequestParam String id){
        //throw new IllegalStateException("CANT GET ALL Persons");
        return personService.getAllPerson(id);
    }

    @PostMapping
    public void addNewPerson( @RequestBody Person person){
        //System.out.println("posted");
        personService.addNewPerson(person);
    }
}
