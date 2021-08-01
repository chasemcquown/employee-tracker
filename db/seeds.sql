INSERT INTO departments (name)
VALUES
    ("Accounting"),
    ("Operations"),
    ("Sales"),
    ("Legal"),
    ("Engineering");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("Accountant", 100000, 1),
    ("Lawyer", 120000, 3),
    ("Engineer", 115000, 5),
    ("Manager", 200000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Jane", "Doe", 1, 2),
    ("Michael", "Smith", 2, 2),
    ("Chase", "McQuown", 1, 2);