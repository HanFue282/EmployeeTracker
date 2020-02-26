const mysql = require("mysql");
const inquirer = require("inquirer");

//MySQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  viewUpdateCharts();
});

//Main options to view, add, or update
function viewUpdateCharts() {
  inquirer.prompt({
    name: "options",
    type: "list",
    message: "What option would you like to perform?",
    choices: [
      "Add departments, roles, employees",
      "View departments, roles, employees",
      "Update employee roles",
      "END/EXIT"
    ]
}).then(function(answer) {
  switch (answer.options) {
    case `Add departments, roles, employees`:
      addDER();
      break;

    case `View departments, roles, employees`:
      viewDER();
      break;

    case `Update employee roles(UNDER CONSTRUCTION)`:
      updateER();
      break;

    case `END/EXIT`:
      connection.end();
  }
});
}

//Perform action to add department, employee, or role (START LINE: 51 END LINE: 166)
function addDER() {
  inquirer.prompt({
    name: "add",
    type: "list",
    message: "What option would you like to perform?",
    choices: [
      "Add departments",
      "Add employees",
      "Add roles",
      "GO BACK"
    ]
}).then(function(answer) {
  switch (answer.add) {
    case `Add departments`:
      addDep();
      break;

    case `Add employees`:
      addEmploy();
      break;

    case `Add roles`:
      addRol();
      break;

    case `GO BACK`:
      viewUpdateCharts();
  }
});
}

//Add department function
function addDep() {
  inquirer
    .prompt([
      {
      name: "name",
      type: "input",
      message: "What department(s) do you wish to add?"
    }
  ]).then(function(answer){
      connection.query(
      "INSERT INTO department (name) VALUES (?)", answer.name, function(err, res){
        if (err) throw err;
        console.log("Sucessfully added department! (Check in 'View departments')");
        addDER();
      }
      );
      
  });
}

//Add employee function
function addEmploy() {
  inquirer
    .prompt([
    {
      name: "first_name",
      type: "input",
      message: "Enter first name of the employee"
    },
    {
      name: "last_name",
      type: "input",
      message: "Enter last name of employee"
    },
    {
      name: "role_id",
      type: "number",
      message: "Enter ID number of their role"
    },
    {
      name: "manager_id",
      type: "number",
      message: "Enter ID number for manager (IF NO MANAGER ID, PLEASE ENTER 0)"
    }
  ]).then(function(answer){
    connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function(err, res){
        if (err) throw err;
        console.log("Successfully added employee! (Check in 'View employees')");
        addDER();
      }
      );
  });
}

//Add role function
function addRol() {
  inquirer
    .prompt([
    {
      name: "title",
      type: "input",
      message: "What role would you like to enter?"
    },
    {
      name: "salary",
      type: "number",
      message: "Enter amount of desire salary for your role"
    },
    {
      name: "department_id",
      type: "number",
      message: "Enter ID number of their department"
    }
  ]).then(function(answer){
    var query = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
    connection.query(query, [answer.title, answer.salary, answer.department_id], function(err, res){
        if (err) throw err;
        console.log("Successfully added role! (Check in 'View roles')");
        addDER();
      }
      );
  });
}

//Perform action to view department, employee, or roles (START LINE: 168 END LINE: 258)
function viewDER() {
  inquirer.prompt({
    name: "view",
    type: "list",
    message: "Which would you like to view?",
    choices: [
      "View departments",
      "View employees",
      "View roles",
      "GO BACK"
    ]
}).then(function(answer) {
  switch (answer.view) {
    case `View departments`:
      viewDepart();
      break;

    case `View employees`:
      viewEmploy();
      break;

    case `View roles`:
      viewRoles();
      break;

    case `GO BACK`:
      viewUpdateCharts();
  }
});
}

//View department function
function viewDepart(){
inquirer
    .prompt([
      {
      name: "name",
      type: "input",
      message: "What department are you searching for?"
    }
  ]).then(function(answer){
      connection.query(
      "SELECT distinct department_id, name FROM department INNER JOIN role ON department.id = role.department_id WHERE name = ?", answer.name, function(err, res){
        if (err) throw err;
        console.table(res);
        viewDER();
      }
      );
  });
}

//View employee function
function viewEmploy(){
  inquirer
    .prompt([
      {
      name: "first_name",
      type: "input",
      message: "Which employee are you looking for? (Enter first name of employee)"
    }
  ]).then(function(answer){
      connection.query(
      "SELECT first_name, last_name, role_id FROM employee WHERE first_name = ?", answer.first_name, function(err, res){
        if (err) throw err;
        console.table(res);
        viewDER();
      }
      );
  });
}

//View role function
function viewRoles(){
  inquirer
    .prompt([
      {
      name: "title",
      type: "input",
      message: "Which role would you like to lookup?"
    }
  ]).then(function(answer){
      connection.query(
      "SELECT * FROM role WHERE title = ?", answer.title, function(err, res){
        if (err) throw err;
        console.table(res);
        viewDER();
      }
      ); 
  });
}

