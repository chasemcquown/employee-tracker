// require necessary modules
const inquirer = require('inquirer');

function userPrompts() {

    inquirer.prompt([
        {
            name: "startMenu",
            message: "What would you like to do?",
            type: "list",
            choices: ["View all depts.", "View all roles", "View all employees", "Add a dept.", "Add a role", "Add an employee", "Update an employee's role" ]
            // call appropriate function based on user's choice
        }
    ])

}

// function viewAllDepts() {

// };

// function viewAllRoles() {

// };

// function viewAllEmployees() {

// };

// function addDept() {

// };

// function addRole() {

// };

// function addEmployee() {

// };

// function updateEmployeeRole() {

// };

userPrompts();