package com.chrishhh.javaProject.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class PersonDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public PersonDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<Person> selectAllStudents(String strID) {
        String sql = "SELECT id, first_name, last_name, email, gender FROM person WHERE program_id = ?";
        UUID program_id = UUID.fromString(strID);
        List<Person> person = jdbcTemplate.query(sql, new Object[]{program_id}, (resultSet, i) -> {
            String idstr = resultSet.getString("id");
            UUID id = UUID.fromString(idstr);

            String firstName = resultSet.getString("first_name");
            String lastName = resultSet.getString("last_name");
            String email = resultSet.getString("email");

            String genderStr = resultSet.getString("gender").toUpperCase();
            Person.Gender gender = Person.Gender.valueOf(genderStr);
            return new Person(id, firstName, lastName, email, gender, program_id);
        });
        return person;
    }

    public int insertPerson(UUID newPersonId, Person person) {
        String sql = "INSERT INTO person(id, first_name, last_name, email, gender, program_id) " +
                        "VALUES (?,?,?,?,?,?)";
        //1 if success 0 if failed
        return jdbcTemplate.update(sql,
                newPersonId,
                person.getFirstName(),
                person.getLastName(),
                person.getEmail(),
                person.getGender().name().toUpperCase(),
                person.getProgram_id());

    }

    public String findHostNameById(UUID host_id){
        String sql = "SELECT first_name, last_name FROM person WHERE id = ?";
        String name = jdbcTemplate.query(sql,(resultSet) ->{
            String firstName = resultSet.getString("first_name");
            String lastName = resultSet.getString("last_name");
            return firstName+lastName;
        });
        System.out.println(name);
        return name;
    }
}
