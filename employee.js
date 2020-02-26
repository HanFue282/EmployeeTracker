const mysql = require("mysql");
const inquirer = require("inquirer");


const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) throw err;
  const results = connection.query("SELECT * FROM employee");
  console.table(results);
  viewUpdateCharts();
});

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
      addDRE();
      break;

    case `View departments, roles, employees`:
      viewDRE();
      break;

    case `Update employee roles`:
      updateER();
      break;

    case `END/EXIT`:
      connection.end();
  }
});
}

function addDRE() {
  inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "What department would you like to add?"
    })
}

function viewDRE() {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "What department are you searching for?"
    }).then(function(answer){
      connection.query(
      "SELECT department_id, name, title, salary FROM department INNER JOIN role ON department.id = role.department_id WHERE name = ?", answer.name, function(err, res){
        if (err) throw err;
        console.table(res);
      }
      );
      viewUpdateCharts();
    });
}

