DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Person", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Richard", "Wilford", 1105, 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Austin", "Powers", 1113, 0);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brooke", "Fisherman", 1568, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Josh", "Derby", 1523, 0);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nolan", "Fitzgerald", 7643, 0);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Erick", "Lovell", 7147, 21);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sally", "Coomer", 7123, 0);