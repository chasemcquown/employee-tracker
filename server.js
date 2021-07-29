// require necessary modules
const inquirer = require('inquirer');

function startMenu() {

    inquirer.prompt([
        {
            name: "startMenu",
            message: "What would you like to do?",
            type: "list",
            choices: ["View all depts.", "View all roles", "View all employees", "Add a dept.", "Add a role", "Add an employee", "Update an employee's role" ]
            // call appropriate function based on user's choice
        }
    ]).then((answers) => {
        if (answers.startMenu === "View all depts.") {
            viewAllDepts();
        } else if (answers.startMenu === "View all roles") {
            viewAllRoles();
        } else if (answers.startMenu === "View all employees") {
            viewAllEmployees();
        } else if (answers.startMenu === "Add a dept.") {
            addDept();
        } else if (answers.startMenu === "Add a role") {
            addRole();
        } else if (answers.startMenu === "Add an employee") {
            addEmployee();
        } else if (answers.startMenu === "Update an employee's role") {
            updateEmployeeRole();
        }
        
    })

}

function viewAllDepts() {
    console.log("1");
};

function viewAllRoles() {
    console.log("2");
};

function viewAllEmployees() {
    console.log("3");
};

function addDept() {
    console.log("4");
};

function addRole() {
    console.log("5");
};

function addEmployee() {
    console.log("6");
};

function updateEmployeeRole() {
    console.log("7");
};

startMenu();