package com.chrishhh.javaProject.program;

import com.chrishhh.javaProject.person.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProgramService {
    private final ProgramDataAccessService programDataAccessService;

    @Autowired
    public ProgramService(ProgramDataAccessService programDataAccessService) {
        this.programDataAccessService = programDataAccessService;
    }

    public List<program> getAllProgram(){
        return programDataAccessService.selectAllPrograms();
    }

    void addNewProgram(program program){
        UUID newProgramId = UUID.randomUUID();
        programDataAccessService.insertProgram(newProgramId, program);

    }

}
