// require necessary modules
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'PeanutButterRottweiler&22',
      database: 'employeetracker'
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
    const sql = `SELECT * FROM departments`
};

function viewAllRoles() {
    const sql = `SELECT * FROM roles`
};

function viewAllEmployees() {
    const sql = `SELECT * FROM employees`
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
            startMenu();
        })
    })
};

function addRole() {
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "Add a role:"
        },
        {
            name: "deptId",
            type: "input",
            message: "Please enter the ID for the department that this role belongs to:"
        },
        {
            name: "salary",
            type: "input",
            message: "Please enter this role's salary"
        }
    ]).then((input) => {
        const sql  = `INSERT INTO roles (title, salary, department_id)
        VALUES (?)`;
        const params = [input.title, input.deptId, input.salary];
        db.query(sql, params, (err, result) => {
           if (err) {
               return;
           }
           startMenu();
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
        },
        {
            name: "roleId",
            type: "input",
            message: "Please enter the corresponding role ID for this employee:"
        },
        {
            name: "managerId",
            type: "input",
            message: "Please enter the ID of this employee's manager:"
        }
    ]).then((input) => {
        const sql  = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
        VALUES (?,?)`;
        const params = [input.employeeFirstName, input.employeeLastName, input.roleId, input.managerId];
        console.log(params)
        db.query(sql, params, (err, result) => {
            if (err) {
                return;
            }
            startMenu();
        })
    })
};

function updateEmployeeRole() {
    inquirer.prompt([
        {
            name: "updatedRoleId",
            type: "input",
            message: "Please enter the id number of the role you wish to update:"
        }
    ]).then((input) => {
        const sql = `SELECT * FROM roles WHERE id = ?`;
        const params = [input.updatedRoleId];
        db.query(sql, params, (err, result) => {
            if (err) {
                return;
            }
            startMenu();
        })
    })
};


// call startMenu() to begin prompts
startMenu();