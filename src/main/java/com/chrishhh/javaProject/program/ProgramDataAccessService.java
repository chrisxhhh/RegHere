package com.chrishhh.javaProject.program;

import com.chrishhh.javaProject.person.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.text.SimpleDateFormat;

@Repository
public class ProgramDataAccessService {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ProgramDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<program> selectAllPrograms() {
        String sql = "SELECT id, name, description, date, host_name FROM program";
        List<program> program = jdbcTemplate.query(sql, (resultSet, i) -> {
            String idstr = resultSet.getString("id");
            UUID id = UUID.fromString(idstr);

            String name = resultSet.getString("name");
            String description = resultSet.getString("description");
            Date date = resultSet.getTimestamp("date");

            //System.out.println(date);
            String host_name = resultSet.getString("host_name");
            return new program(id, name, host_name, description ,date);
        });


        return program;
    }

    public int insertProgram(UUID newProgramId, program program){
        String sql = "INSERT INTO program(id, name, description, date, host_name) " +
                "VALUES (?,?,?,?,?)";
        //1 if success 0 if failed
        //System.out.println("reach data level");
        return jdbcTemplate.update(sql,
                newProgramId,
                program.getName(),
                program.getDescription(),
                program.getDate(),
                program.getHost_name());
    };

}


