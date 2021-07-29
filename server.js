// require necessary modules
const inquirer = require('inquirer');

// prompt the user with a start menu
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

// handle start menu response with one of the following functions
function viewAllDepts() {
    // write some js that will display table of depts... use GET route
};

function viewAllRoles() {
    // write some js that will display table of roles... use GET route 
};

function viewAllEmployees() {
    // write some js that will display table of all employees... use GET route
};

function addDept() {
    // write some js that will allow the user to add a department to dept table... use POST route
};

function addRole() {
    // write some js that will allow user to add a role to the roles table... use POST route 
};

function addEmployee() {
    // write some js that will allow user to add an employee to the employees table... use POST route 
};

function updateEmployeeRole() {
    // write some js that will allow user to change an employees role... use PUT route
};


// call startMenu() to begin prompts
startMenu();