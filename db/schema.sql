DROP DATABASE IF EXISTS company;
/* if the database already exists, then delete it.*/

CREATE DATABASE company;
/* create the company database */

USE company;
/* use the company database */

CREATE TABLE department (
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(30) NOT NULL
    );

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(20,2) NOT NULL,
    department_id INTEGER NOT NULL
    );

CREATE TABLE employee (
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
     role_id INTEGER NOT NULL,
     manager_id INTEGER
     );