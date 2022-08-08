CREATE TABLE IF NOT EXISTS Person(
    id UUID PRIMARY KEY NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    gender VARCHAR(6) NOT NULL
    );

CREATE TABLE IF NOT EXISTS Program(
    id UUID PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    host_id UUID NOT NULL,
    description VARCHAR(255),
    date DATE not NULL,
    FOREIGN KEY (host_id) REFERENCES Person(id)
    );

