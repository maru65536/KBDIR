-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    handle_name VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    twitter_id VARCHAR(255),
    comment TEXT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create ir table
CREATE TABLE ir (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255),
    url VARCHAR(255),
    ir_type VARCHAR(50) NOT NULL,
    first_half_start TIMESTAMP,
    first_half_end TIMESTAMP,
    second_half_start TIMESTAMP,
    second_half_end TIMESTAMP
);

-- Create machines table
CREATE TABLE machines (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ir_id INTEGER REFERENCES ir(id),
    first_half_info TEXT,
    second_half_info TEXT,
    non_target_info TEXT
);

-- Create songs table
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    machine_id INTEGER REFERENCES machines(id),
    name VARCHAR(255) NOT NULL,
    score_type VARCHAR(50) NOT NULL,
    difficulty VARCHAR(50) NOT NULL,
    level INTEGER,
    score_theoretical INTEGER,
    coefficient REAL
);

INSERT INTO users (handle_name, department, year, twitter_id, comment, email, password) VALUES ('admin', 'admin学部', 1, '@admin', 'adminです', 'admin@example.com', 'adminpass');
