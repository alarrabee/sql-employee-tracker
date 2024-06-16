-- seeds department, role, employee tables with stated values in postgres
INSERT INTO department (name) 
VALUES
('Customer Service'),
('Engineering'),
('Finance'),
('Human Resources'),
('Legal'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Customer Service Lead', 72000, 1),
('Customer Service Associate', 60000, 1),
('Lead Engineer', 185000, 2),
('Associate Engineer', 133000, 2),
('Finance Manager', 139000, 3),
('Accountant', 106000, 3),
('Human Resources Manager', 85000, 4),
('Recruiter', 69000, 4),
('Legal Team Lead', 170000, 5),
('Lawyer', 82000, 5),
('Sales Lead', 175000, 6),
('Sales Representative', 132000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Tony', 'Heath', 1, NULL),
('Jo', 'Hawkes', 2, 1),
('Barbara', 'Tanner', 2, 1),
('Nicole', 'Seals', 3, NULL),
('Jason', 'Knott', 4, 4),
('Mayra', 'Sawyer', 4, 4),
('Tyler', 'Smith', 4, 4),
('Kat', 'Burnham', 5, NULL),
('Jessica', 'Campbell', 6, 8),
('Don', 'Ward', 6, 8),
('Denzel', 'Dukes', 7, NULL),
('Lane', 'West', 8, 11),
('Ruth', 'Gibson',9, NULL),
('Ed', 'Steal', 10, 13),
('Aidan', 'Frost', 11, NULL),
('Laura', 'Thorn', 12, 15),
('Jackie', 'Higgins', 12, 15); 