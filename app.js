// require necessary modules
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'PeanutButterRottweiler&22',
      database: 'inventory_db'
    },
    console.log(`Connected to the employeetracker database.`)
);

// prompt the user with a start menu
function startMenu() {
    inquirer.prompt([
        {
            name: "startMenu",
            message: "What would you like to do?",
            type: "list",
            choices: ["View all depts.", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee's role" ]
        }
    ]).then((input) => {
        if (input.startMenu === "View all depts.") {
            viewAllDepts();
        } else if (input.startMenu === "View all roles") {
            viewAllRoles();
        } else if (input.startMenu === "View all employees") {
            viewAllEmployees();
        } else if (input.startMenu === "Add a department") {
            addDept();
        } else if (input.startMenu === "Add a role") {
            addRole();
        } else if (input.startMenu === "Add an employee") {
            addEmployee();
        } else if (input.startMenu === "Update an employee's role") {
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
    inquirer.prompt([
        {
            name: "deptName",
            type: "input",
            message: "Add a department:"
        }
    ]).then((input) => {
        const sql  = `INSERT INTO departments (name)
        VALUES (?)`;
        const params = [input.deptName];
        db.query(sql, params, (err, result) => {
            if (err) {
                return;
            }
        })
    })
};

function addRole() {
    inquirer.prompt([
        {
            name: "roleName",
            type: "input",
            message: "Add a role:"
        }
    ]).then((input) => {
        const sql  = `INSERT INTO roles (title)
        VALUES (?)`;
        const params = [input.roleName];
        db.query(sql, params, (err, result) => {
           if (err) {
               return;
           }
       })
    })
};

function addEmployee() {
    inquirer.prompt([
        {
            name: "employeeFirstName",
            type: "input",
            message: "Add an employee's first name:"
        },
        {
            name: "employeeLastName",
            type: "input",
            message: "Please enter the employee's last name:"
        }
    ]).then((input) => {
        const sql  = `INSERT INTO employees (first_name, last_name)
        VALUES (?,?)`;
        const params = [input.employeeFirstName, inputemployeeLastName];
        db.query(sql, params, (err, result) => {
            if (err) {
                return;
            }
        })
    })
};

function updateEmployeeRole() {
    // make the user enter the id of the employee that they wish to update
};


// call startMenu() to begin prompts
startMenu();