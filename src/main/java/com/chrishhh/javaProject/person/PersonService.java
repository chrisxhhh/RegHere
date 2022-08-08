package com.chrishhh.javaProject.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PersonService {

    private final PersonDataAccessService personDataAccessService;

    @Autowired
    public PersonService(PersonDataAccessService personDataAccessService) {
        this.personDataAccessService = personDataAccessService;
    }

    public List<Person> getAllPerson(String id){
        return personDataAccessService.selectAllStudents(id);
    }

    void addNewPerson( Person person) {
        UUID newPersonId;
        if (person.getId() != null){
            newPersonId = person.getId();
        }else{
            newPersonId = UUID.randomUUID();
        }
        System.out.println(person);
        personDataAccessService.insertPerson(newPersonId, person);
    }
}
