DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

-- \c employees_db;
SELECT employees_db;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) UNIQUE NOT NULL,
    last_name VARCHAR(30) UNIQUE NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);





-- --find the department id
-- SELECT id FROM department WHERE name = '';

-- --find role id
-- SELECT id FROM role WHERE title = '';

-- --find manager
-- manager AS (
--     SELECT id FROM employee WHERE first_name = 'Jane' AND last_name = 'Smith'
-- );

-- --Add employee query
-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ('First', 'Last', (SELECT id FROM role WHERE title = 'title'), (SELECT id FROM manager));



-- --Add department
-- INSERT INTO department (name)
-- VALUES('department');

-- --Add role
-- INSERT INTO role (title, salary, (SELECT id FROM department WHERE name = 'Name'));$1