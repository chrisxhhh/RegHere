ALTER TABLE Person
    ADD program_id UUID;

ALTER TABLE Person
    ADD FOREIGN KEY (program_id) REFERENCES program(id);
