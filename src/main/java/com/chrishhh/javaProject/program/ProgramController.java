package com.chrishhh.javaProject.program;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("api/program")
public class ProgramController {
    private final ProgramService programService;

    @Autowired
    public ProgramController(ProgramService programService) {
        this.programService = programService;
    }

    @GetMapping
    public List<program> getAllProgram(){
        return programService.getAllProgram();
    }

    @PostMapping
    public void addNewProgram(@RequestBody program program){
        System.out.println(program);
        programService.addNewProgram(program);
    }


}
