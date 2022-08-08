package com.chrishhh.javaProject.program;

import java.util.Date;
import java.util.UUID;

public class program {
    private final UUID id;
    private final String name;
    private final String host_name;
    private final String description;
    private final Date date;


    public program(UUID id, String name, String host_name , String description, Date date) {
        this.id = id;
        this.name = name;
        this.host_name = host_name;
        this.description = description;
        this.date = date;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getHost_name() {
        return host_name;
    }

    public Date getDate() {
        return date;
    }


    public String getDescription() {
        return description;
    }

}
