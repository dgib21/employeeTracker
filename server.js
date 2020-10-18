const mysql2 = require('mysql2');
const inquirer = require("inquirer");


//connect to DB 
const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: '',
  database: 'ice_creamDB'
});

//connect to the DB and if an error log it
connection.connect(err => {
    if (err) throw err;

    console.log(
        `====================================================================================`
      );
      console.log("\n WELCOME TO YOUR EMPLOYEE MANAGEMENT SYSTEM \n");
      console.log("connected as id " + connection.threadId + "\n");
      console.log(
        `====================================================================================`
      );    mainMenu();
  });

//function for main menu that will ask user questions
function mainMenu() {

    // Prompting user to choose an option 
    inquirer
      .prompt({
        name: "main",
        type: "list",
        message: "MAIN MENU",
        choices: [
          "View all Departments",
          "View all roles",
          "View all Employees",
          "Add department",
          "Add a Role",
          "Add Employee",
          "Update employee role",
          "Exit",
        ],
      })
      .then((response) => {
        // Switch case depending on user option
        switch (response.main) {
          case "View all departments":
            viewAllDepartments();
            break;
          case "View all roles":
            viewAllRoles();
            break;
          case "View all employees":
            viewAllEmployees();
            break;
            case "Add role":
            addEmployeeRole();
            break;
          case "Add employee":
            addEmployee();
            break;
          case "Update employee role":
            updateEmployeeRole();
            break;
          case "Exit":
            connection.end();
            break;
          default:
            mainMenu();
        }
      });
  }


//function to display all departments to user

function viewAllDepartments() {
    console.log("departments"); 


}


//function to display all roles 

function viewAllRoles() {
    console.log("Roles"); 


}


//function to add a department 
function viewAllEmployees() {
    console.log("All Employees"); 


}

//function to add a role 

function addEmployeeRole() {
    console.log("employee role aDDED"); 


}

//function to add an employee
function addEmployee() {
    console.log("Employee added"); 

}

//function to update an employee role 
function updateEmployeeRole() {
    console.log("employee role updated"); 

}
