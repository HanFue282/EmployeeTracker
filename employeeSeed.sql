DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT default 0,
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
VALUES("Richard"),
      ("Austin"),
      ("Brooke"),
      ("Josh"),
      ("Nolan"),
      ("Erick"),
      ("Sally")

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, "Sales"),
       ("Sales Person", 80000, "Sales"),
       ("Lead Engineer", 150000, "Engineering"),
       ("Software Engineer", 120000, "Engineering"),
       ("Accountant", 125000, "Finance"),
       ("Legal Team Lead", 250000, "Legal"),
       ("Lawyer", 190000, "Legal"),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Richard", "Wilford", 1, 1),
       ("Austin", "Powers", 1, 2),
       ("Brooke", "Fisherman", 2, 1)
       ("Josh", "Derby", 2, 2)
       ("Nolan", "Fitzgerald", 3, 1)
       ("Erick", "Lovell", 4, 1)
       ("Sally", "Coomer", 5, 1)