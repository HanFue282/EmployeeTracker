var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
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

function viewUpdateCharts() {
  inquirer.prompt({
    message: "What option would you like to perform?",
    name: "choice",
    type: "list",
    choices: [
      "Add departments, roles, employees",
      "View departments, roles, employees",
      "Update employee roles"
    ]
}).then(function(answer) {
  console.log(answer);
  switch (answer) {
    case value:
      
      break;
  
    default:
      break;
  }

});

















    // connection.query("SELECT department_id, name, title, salary FROM department INNER JOIN role ON department.id = role.department_id", function(err, res) {
    //   if (err) throw err;
    //   console.table(res);
    //   connection.end();
    // });
  }

  