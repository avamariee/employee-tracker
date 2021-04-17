DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS department;


CREATE TABLE department (
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(30) NOT NULL
    );

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(20,2) NOT NULL,
    department_id INTEGER NOT NULL
    /* this needs to be a foreign key */
    );

CREATE TABLE employee (
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
     role_id INTEGER NOT NULL,
     /* this needs to be a foreign key */
     manager_id INTEGER
     /* this needs to be a foreign key */
     );